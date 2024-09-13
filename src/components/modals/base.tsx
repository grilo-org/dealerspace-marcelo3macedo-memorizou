import { XMarkIcon } from "@heroicons/react/24/solid";

import { ModalProps } from "@/themes/props/modal";

export default function BaseModal({
  children,
  closeAction,
}: Readonly<ModalProps>) {
  return (
    <div className="bg-opacity-70 bg-black w-full h-svh fixed left-0 top-0 z-20">
      <div
        className="fixed  inset-0 z-20 overflow-y-auto transition duration-300 ease-out translate-y-4 sm:translate-y-0 sm:scale-95"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start pt-10 md:pt-0 px-8 md:px-0 md:items-end justify-center min-h-screen text-center sm:block sm:p-0">
          <div className="relative inline-block px-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl rtl:text-right sm:my-8 sm:align-middle w-full sm:max-w-2xl sm:w-full sm:p-4">
            <div className="flex items-end justify-end py-4 md:py-0">
              <button onClick={closeAction}>
                <XMarkIcon className="text-slate-600 w-6 h-6" />
              </button>
            </div>
            <div className="pb-4 md:pb-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
