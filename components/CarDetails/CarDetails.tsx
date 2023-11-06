import { Fragment } from "react";

import { Dialog, Transition } from "@headlessui/react";
import { CarDetailsProps } from "@/types";
import { ICONS_DIMENSIONS, PATHS } from "@/helpers/global/constants/constants";

import { ICON_ALT } from "./constants";
import Button from "../Button/Button";
import ModalContentPhoto from "../ModalContentPhoto/ModalContentPhoto";
import ModalContentInformation from "../ModalContentInformation/ModalContentInformation";

export default function CarDetails({
  isOpen,
  closeModal,
  car,
}: CarDetailsProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto ">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <Button
                    containerStyles="absolute top-2 right-2 z-10 w-fit p-2  rounded-full"
                    handleClick={closeModal}
                    buttonIcon={PATHS.CLOSE}
                    iconAlt={ICON_ALT}
                    iconWidth={ICONS_DIMENSIONS.WIDTH}
                    iconHeight={ICONS_DIMENSIONS.HEIGHT}
                  />
                  <ModalContentPhoto car={car} />
                  <ModalContentInformation car={car} />
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
