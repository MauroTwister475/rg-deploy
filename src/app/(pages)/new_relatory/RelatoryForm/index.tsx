
import { zodResolver } from "@hookform/resolvers/zod";
import { InputGroup } from "./InputGroup";
import { ErrorMessage, SucessMessage } from "@/app/utils/FeedBack/Messages";
import { REFERENCES, POINTS } from "@/app/constants/ReferencesTypes";
import { useModal } from "@/app/hooks/useModal";
import { ModalAction } from "@/app/components/ModalAction";

export const Root = {
  zodResolver,
  InputGroup,
  ErrorMessage,
  SucessMessage,
  REFERENCES,
  POINTS,
  useModal,
  ModalAction,
}