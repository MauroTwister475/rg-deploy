import { ToastContainer } from 'react-toastify'

type ToastProps = {
  position: "bottom-left" | "bottom-center" | "bottom-right"
  | "top-right" | "top-left" | "top-center";
}

export function Toast({ position = "top-right" }: ToastProps) {
  return <ToastContainer  position={position} />
}
