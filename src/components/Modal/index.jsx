import { Fragment, useRef } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux'
import { closeModal } from '../../reducer'

const Modal = ({ title, children }) => {
  const dispatch = useDispatch();
  const modalStatus = useSelector(({ modal }) => modal.status);

  const cancelButtonRef = useRef(null)

  const handleModalClose = () => dispatch(closeModal());

  const renderModalTitle = () => (
    <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-900 mb-4">
      {title}
    </Dialog.Title>
  );

  const renderModalContent = () => children;

  const renderPanel = () => (
    <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all w-5/6 p-6">
      {renderModalTitle()}
      {renderModalContent()}
    </Dialog.Panel>
  );

  return (
    <Transition.Root show={modalStatus} as={Fragment}>
      <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={handleModalClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              {renderPanel()}
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}

export default Modal;