import React, { useState } from "react";
import {
  Button,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";

const UserModel = (props) => {

  const {userData} = props;

  const [usersData,setUsersData] = useState('')


  const inputHandler = (e) =>{
    setUsersData(usersData =>({...usersData, [e.target.name] : e.target.value}))
  }

  // console.log('This is Data Id' , dataId)

  // console.log('This is All Data from UserModel'  , data);

  // data.map((result) => {
  //    if(result.id === dataId){
  //         console.log('This is Click Model' , result)
  //    }
  // })

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button onClick={toggle} className="modal-btn btn btn-link">
        <i aria-label="icon: edit" className="icon-decoration">
          <svg
            viewBox="64 64 896 896"
            class=""
            data-icon="edit"
            width="1em"
            height="1em"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 0 0 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 0 0 9.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"></path>
          </svg>
        </i>
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Basic Modal</ModalHeader>

        <ModalBody>

          <Form>
            <FormGroup className="forms">
              <div>
                <Label className="form-lable" for="exampleEmail">
                  <span className="requiredField">*</span>Name:
                </Label>
                <div className="form-validate">
                  <Input value={userData[1]} name='name' onChange={inputHandler}  />
                </div>

                {/* <Input invalid />
                  <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
              </div>
            </FormGroup>

            <FormGroup className="forms">
              <div>
                <Label className="form-lable" for="exampleEmail">
                  <span className="requiredField">*</span>Email:
                </Label>
                <div className="form-validate">
                <Input value={userData[2]} />
                </div>

                {/* <Input invalid />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
              </div>
            </FormGroup>


            <FormGroup className="forms">
              <div>
                <Label className="form-lable" for="exampleEmail">
                  <span className="requiredField">*</span>Phone:
                </Label>
                <div className="form-validate">
                <Input value={userData[3]} />
                </div>

                {/* <Input invalid />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
              </div>
            </FormGroup>


            <FormGroup className="forms">
              <div>
                <Label className="form-lable" for="exampleEmail">
                  <span className="requiredField">*</span>Website:
                </Label>
                <div className="form-validate">
                <Input value={userData[4]} required/>
                </div>

                {/* <Input invalid />
                <FormFeedback valid>Sweet! that name is available</FormFeedback>
                <FormFeedback>Oh noes! that name is already taken</FormFeedback> */}
              </div>
            </FormGroup>
          </Form>
        </ModalBody>

        <ModalFooter>
        <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>{" "}
          <Button color="primary" onClick={toggle}>
            Ok
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default UserModel;
