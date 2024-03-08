import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SucessMessage(message: string | null) {
  toast.success(message);
}

export function ErrorMessage(message: string | null ) {
  toast.error(message);
}