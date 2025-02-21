// ignore: avoid_web_libraries_in_flutter
import 'dart:html' as html;
import 'dart:js_interop';
import 'dart:ui_web' as ui;

import 'package:flutter/material.dart';
import 'package:fullscreen_image/utils.dart';

/// A default image URL used to create the HTML image element.
const String anyImage =
    'https://i.pinimg.com/originals/fd/1e/df/fd1edf0b834f0dfcea974f67fabe91c3.jpg';

/// Registers a custom HTML image element with the specified [imageUrl].
///
/// This function creates an [html.ImageElement] with the provided [imageUrl]
/// and registers it with the platform view registry using the view type
/// `'image-html'`. The registered element can then be embedded into the
/// Flutter widget tree via [HtmlElementView].
///
/// [imageUrl] is the URL to be used as the source of the image.
void registerImageElement(String imageUrl) {
  // Create the HTML image element.
  final html.ImageElement element = html.ImageElement()
    ..id = 'custom-image'
    ..style.width = '100%'
    ..style.height = '100%'
    ..src = imageUrl;

  // Register the element with the platform view registry.
  ui.platformViewRegistry.registerViewFactory(
    'image-html',
    (int viewId) => element,
  );
}

/// The entry point of the application.
void main() {
  registerImageElement(anyImage);
  runApp(const MyApp());
}

/// A Flutter application that demonstrates displaying an HTML image with
/// fullscreen toggling functionality.
class MyApp extends StatelessWidget {
  /// Creates a [MyApp] widget.
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      home: const HomePage(),
    );
  }
}

/// External JavaScript function to handle fullscreen actions.
///
/// The function is expected to be provided by the host page or external script.
/// If an [action] is provided, it should be either `"enter"` to enter fullscreen
/// mode or `"exit"` to exit fullscreen mode.
/// If nothing is provided it will be using `"default"`.
@JS('FullscreenController.handle')
external void handleFullscreen([String action]);

/// The home page widget that displays an image and controls for fullscreen mode.
class HomePage extends StatefulWidget {
  /// Creates a [HomePage] widget.
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

/// State for the [HomePage] widget.
class _HomePageState extends State<HomePage> {
  /// Controller for the text field that accepts a new image URL.
  final TextEditingController _textEditingController = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Padding(
        padding: const EdgeInsets.fromLTRB(32, 16, 32, 16),
        child: Stack(
          children: [
            Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                Expanded(
                  child: AspectRatio(
                    aspectRatio: 1,
                    child: Container(
                      decoration: BoxDecoration(
                        color: Colors.grey,
                        borderRadius: BorderRadius.circular(12),
                      ),
                      child: GestureDetector(
                        onDoubleTap: () {
                          // Toggle fullscreen mode on double tap.
                          handleFullscreen();
                        },
                        child: const HtmlElementView(
                          viewType: 'image-html',
                        ),
                      ),
                    ),
                  ),
                ),
                const SizedBox(height: 8),
                Row(
                  children: [
                    Expanded(
                      child: TextField(
                        decoration:
                            const InputDecoration(hintText: 'Image URL'),
                        controller: _textEditingController,
                      ),
                    ),

                    /// A button that updates the image if the entered URL is valid.
                    ElevatedButton(
                      onPressed: () async {
                        final String newUrl = _textEditingController.text;
                        final bool isImage = await validateImage(newUrl);
                        setState(() {
                          if (isImage == true) {
                            final html.ImageElement? imgElement =
                                html.document.getElementById('custom-image')
                                    as html.ImageElement?;
                            imgElement?.src = newUrl;
                          } else {
                            showErrorSnackbar(
                                context, "Unknown format image");
                          }
                          _textEditingController.clear();
                        });
                      },
                      child: const Padding(
                        padding: EdgeInsets.fromLTRB(0, 12, 0, 12),
                        child: Icon(Icons.arrow_forward),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 64),
              ],
            ),
          ],
        ),
      ),
      floatingActionButton: const FullscreenContextMenu(),
    );
  }
}

/// Creates a [FullscreenContextMenu] widget.
///
/// A widget that displays a floating action button which, when pressed,
/// shows a context menu for entering or exiting fullscreen mode.
class FullscreenContextMenu extends StatelessWidget {
  const FullscreenContextMenu({super.key});

  @override
  Widget build(BuildContext context) {
    return Builder(
      builder: (BuildContext innerContext) {
        return FloatingActionButton(
          onPressed: () {
            showGeneralDialog(
              context: innerContext,
              barrierLabel: "Barrier",
              barrierDismissible: true,
              barrierColor: Colors.black.withValues(alpha: 0.5),
              transitionDuration: const Duration(milliseconds: 120),
              pageBuilder: (
                BuildContext context,
                Animation<double> animation,
                Animation<double> secondaryAnimation,
              ) {
                return Align(
                  alignment: Alignment.bottomRight,
                  child: Padding(
                    // Position the dialog above the FAB.
                    padding: const EdgeInsets.only(right: 16.0, bottom: 80.0),
                    child: Material(
                      type: MaterialType.transparency,
                      child: Container(
                        width: 200,
                        decoration: BoxDecoration(
                          color: Colors.white,
                          borderRadius: BorderRadius.circular(8),
                        ),
                        child: Column(
                          mainAxisSize: MainAxisSize.min,
                          children: [
                            ListTile(
                              title: const Text('Enter fullscreen'),
                              onTap: () {
                                Navigator.of(context).pop();
                                handleFullscreen("enter");
                              },
                            ),
                            ListTile(
                              title: const Text('Exit fullscreen'),
                              onTap: () {
                                Navigator.of(context).pop();
                                handleFullscreen("exit");
                              },
                            ),
                          ],
                        ),
                      ),
                    ),
                  ),
                );
              },
              transitionBuilder:
                  (context, animation, secondaryAnimation, child) {
                return FadeTransition(
                  opacity: animation,
                  child: child,
                );
              },
            );
          },
          child: const Icon(Icons.add),
        );
      },
    );
  }
}
