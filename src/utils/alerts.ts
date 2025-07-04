import Swal from "sweetalert2";

type AlertType = "error" | "success" | "loading" | "close" | "confirm";

export function fncSweetAlert(
  type: AlertType,
  text: string,
  url?: string
): Promise<boolean | void> | void {
  switch (type) {
    case "error":
      if (!url) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text,
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(url, "_top");
          }
        });
      }
      break;

    case "success":
      if (!url) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text,
        });
      } else {
        Swal.fire({
          icon: "success",
          title: "OK",
          text,
        }).then((result) => {
          if (result.isConfirmed) {
            window.open(url, "_top");
          }
        });
      }
      break;

    case "loading":
      Swal.fire({
        allowOutsideClick: false,
        icon: "info",
        text,
      });
      Swal.showLoading();
      break;

    case "close":
      Swal.close();
      break;

    case "confirm":
      return Swal.fire({
        text,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Cancelar",
        confirmButtonText: "Sí!",
      }).then((result) => result.isConfirmed);
  }
}
