import {
  Button,
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
} from "react-aria-components";
import { IconClose, IconMenu } from "./Icons";

const CustomModal = () => {
  return (
    <DialogTrigger>
      <Button className="md:hidden">
        <IconMenu></IconMenu>
      </Button>
      <ModalOverlay className="bg-black/50 fixed inset-0 z-10">
        <Modal className="bg-white flex flex-row items-center justify-center h-32">
          <Dialog className="flex flex-row items-center justify-between gap-12 px-8">
            {({ close }) => (
              <>
                <Button onPress={close} className="">
                  <IconClose></IconClose>
                </Button>

                <ul className="flex flex-row gap-4 items-center">
                  <li className="font-bold">
                    <a href="">Home</a>
                  </li>
                  <li className="font-bold">
                    <a href="">Shop</a>
                  </li>
                  <li className="font-bold">
                    <a href="">About</a>
                  </li>
                  <li className="font-bold">
                    <a href="">Contact</a>
                  </li>
                </ul>
              </>
            )}
          </Dialog>
        </Modal>
      </ModalOverlay>
    </DialogTrigger>
  );
};

export default CustomModal;
