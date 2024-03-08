import { Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Form } from "../Form";
import { ButtonClose } from "@/app/components/ButtonClose";
import { HeaderModal } from "./HeaderModal/Index";
import { ModalContentWrapper } from "./ModalContentWrapper";
import { twM } from "@/app/utils/twMerge";
import { ButtonCloseModal } from "../ButtonCloseModal";

interface ModalActionProps {
  title: string;
  className?: string;
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function ModalAction({
  isOpen,
  setIsOpen,
  title,
  children,
  className,
}: ModalActionProps) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10 bg-white"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 overflow-y-auto  w-full main-overlay">
          <div className="flex min-h-full items-center justify-center gap-6 p-8">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-100"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className={twM('max-w-7xl transform overflow-hidden rounded-lg shadowHeader bg-white px-8 text-left align-middle transition-all', className)}>
                <Form.Root>
                  <HeaderModal>
                    <h3 className="text-lg ml-3.5">
                      {title}
                    </h3>
                    <ButtonClose setIsOpen={setIsOpen} />
                  </HeaderModal>
                  <ModalContentWrapper className="flex-col gap-2">
                    {children}
                    <ButtonCloseModal setIsOpen={setIsOpen} className="ml-3.5 mb-4"/>
                  </ModalContentWrapper>
                </Form.Root>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}
