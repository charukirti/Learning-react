import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";
import CabinTable from "../cabins/CabinTable";

export default function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>

        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>

        {/* Below code was just to show that we can create multiple modal window inside same component*/}
      </Modal>
    </div>
  );
}

// export default function AddCabin() {
//   const [isOpenModal, setisOpenModal] = useState(false);
//   return (
//     <div>
//       <Button onClick={() => setisOpenModal((show) => !show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && (
//         <Modal onClose = {() => setisOpenModal(false)}>
//           <CreateCabinForm onCloseModal = {() => setisOpenModal(false)}/>
//         </Modal>
//       )}
//     </div>
//   );
// }
