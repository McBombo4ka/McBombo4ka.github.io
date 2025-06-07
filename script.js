/// A global object for handling fullscreen mode.
///
/// This object provides a method to toggle, enter, or exit fullscreen mode
/// using the Fullscreen API.

window.FullscreenController = {
    handle: (action = "toggle") => {
      const isFullscreen = !!document.fullscreenElement;
  
      switch (action) {
        case "enter":
          // Enter fullscreen mode if not already in fullscreen.
          if (!isFullscreen) {
            document.documentElement?.requestFullscreen();
          }
          break;
        case "exit":
          // Exit fullscreen mode if currently in fullscreen.
          if (isFullscreen) {
            document.exitFullscreen();
          }
          break;
        case "toggle":
        default:
          // Toggle fullscreen mode.
          isFullscreen
            ? document.exitFullscreen()
            : document.documentElement?.requestFullscreen();
          break;
      }
    },
  };
  