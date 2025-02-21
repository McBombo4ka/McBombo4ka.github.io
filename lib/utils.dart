import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

/// Checks if the given [contentType] corresponds to a supported image format.
///
/// Supported formats are:
/// - `image/jpeg`
/// - `image/png`
///
/// Returns `true` if [contentType] matches one of the supported types;
/// otherwise, returns `false`.
bool _checkIfImage(String contentType) {
  return contentType == 'image/jpeg' || contentType == 'image/png';
}

/// Validates whether the provided [imageUrl] points to a valid image resource.
///
/// This function sends an HTTP GET request to [imageUrl] and checks if the
/// response has a 200 status code and a valid image content type (jpeg, png,
/// or gif).
///
/// Returns `true` if the URL is valid and points to an image; otherwise,
/// returns `false`.
Future<bool> validateImage(String imageUrl) async {
  http.Response res;
  try {
    res = await http.get(Uri.parse(imageUrl));
  } catch (e) {
    return false;
  }
  if (res.statusCode != 200) return false;
  final Map<String, String> headers = res.headers;
  return _checkIfImage(headers['content-type'] ?? '');
}

/// Displays a [SnackBar] notification at the bottom of the screen with the given [message].
///
/// - [context] is used to obtain the [ScaffoldMessenger] for displaying the notification.
/// - [message] is the error text that will be shown.
void showErrorSnackbar(BuildContext context, String message) {
  final scaffoldMessenger = ScaffoldMessenger.of(context);
  scaffoldMessenger.clearSnackBars();

  scaffoldMessenger.showSnackBar(
    SnackBar(
      content: Text(message),
      backgroundColor: Colors.red,
      behavior: SnackBarBehavior.fixed,
    ),
  );
}