/** @format */
import { useState } from "react";
import { Modal } from "antd";
import { postApi } from "../../Repository/Api";
import { ButtonComponent, InputComponent } from "../HelpingComponents";
import endPoints from "../../Repository/apiConfig";
import { FaRegUserCircle } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";

const CreateDriver = ({ handleClose, show, fetchApi }) => {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [license, setLicense] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");

  const fullName = firstName + " " + lastName;

  const payload = {
    firstName,
    lastName,
    fullName,
    email,
    license,
    mobileNumber,
  };

  const submitHandler = (e) => {
    e.preventDefault();
    postApi(endPoints.drivers.createNew, payload, {
      successMsg: "Success !",
      additionalFunctions: [handleClose, fetchApi],
      setLoading,
    });
  };

  return (
    <Modal
      centered
      title="Create Driver"
      open={show}
      onCancel={handleClose}
      footer={null}
      width={600}
    >
      <div className="reset-password-modal">
        <hr />

        <form onSubmit={submitHandler}>
          <div className="pl-5 pr-5">
            <div className="flex gap-5 justify-between mt-5">
              <div className="w-[50%]">
                <label className="text-[#8E8F8F]">First Name</label>
                <br />
                <InputComponent
                  className="text-input"
                  onChangeEvent={(e) => setFirstName(e.target.value)}
                  value={firstName}
                  required
                />
              </div>
              <div className="w-[50%]">
                <label className="text-[#8E8F8F]">Last Name</label>
                <br />
                <InputComponent
                  className="text-input"
                  onChangeEvent={(e) => setLastName(e.target.value)}
                  value={lastName}
                  required
                />
              </div>
            </div>
            <div className="flex gap-5 justify-between mt-5">
              <div className="w-[50%]">
                <label className="text-[#8E8F8F]">Email Address</label>
                <br />
                <InputComponent
                  className="text-input"
                  onChangeEvent={(e) => setEmail(e.target.value)}
                  value={email}
                  type={"email"}
                  required
                />
              </div>
              <div className="w-[50%]">
                <label className="text-[#8E8F8F]">Mobile Number</label>
                <br />
                <InputComponent
                  className="text-input"
                  onChangeEvent={(e) => setMobileNumber(e.target.value)}
                  value={mobileNumber}
                  required
                />
              </div>
            </div>

            <div className="gap-5 justify-center mt-5 flex flex-col">
              <div>
                <label className="text-[#8E8F8F]">License</label>
                <br />
                <InputComponent
                  className="text-input"
                  onChangeEvent={(e) => setLicense(e.target.value)}
                  value={license}
                  required
                />
              </div>
            </div>

            <div className="flex justify-center mt-5 gap-5 m-5">
              <ButtonComponent
                label={"Cancel"}
                className={
                  "text-[#F56C89] w-[180px] h-[45px] bg-white border border-[#F56C89]"
                }
                onClickEvent={handleClose}
                type="button"
              />

              <ButtonComponent
                label={"Create"}
                className={
                  "bg-[#34B7C1] w-[180px] h-[45px]  text-white flex justify-center items-center gap-2"
                }
                isLoading={loading}
                type="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </Modal>
  );
};

const EditDriver = ({ handleClose, show }) => {
  const [editseletedtab, seteditselectedteb] = useState("Basic");
  return (
    <Modal
      centered
      title="Edit Driver"
      open={show}
      onCancel={handleClose}
      footer={null}
      width={600}
    >
      <div className="reset-password-modal">
        <hr />
        <div className="mt-5">
          <div className="flex">
            <div
              className={`cursor-pointer ${
                editseletedtab === "Basic"
                  ? "w-[150px] h-[45px] flex items-center justify-center  gap-2 underline-custom"
                  : "w-[150px] h-[45px] flex items-center justify-center    gap-2"
              }`}
              onClick={() => seteditselectedteb("Basic")}
            >
              Basic
            </div>
            <div
              className={`cursor-pointer ${
                editseletedtab === "Cycle info"
                  ? "w-[150px] h-[45px] flex items-center justify-center   gap-2 underline-custom"
                  : "w-[150px] h-[45px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => seteditselectedteb("Cycle info")}
            >
              Cycle info
            </div>
            <div
              className={`cursor-pointer ${
                editseletedtab === "Settings"
                  ? "w-[150px] h-[45px] flex items-center justify-center   gap-2 underline-custom"
                  : "w-[150px] h-[45px] flex items-center justify-center   gap-2"
              }`}
              onClick={() => seteditselectedteb("Settings")}
            >
              Settings
            </div>
          </div>
        </div>

        {editseletedtab && (
          <div>
            {editseletedtab === "Basic" && (
              <>
                <div className="mt-5 relative">
                  <FaRegUserCircle size={100} style={{ color: "#34B7C1" }} />

                  <div className="bg-[#34B7C1] absolute -bottom-0 left-[4rem] w-[40px] h-[40px] rounded-full flex justify-center items-center">
                    <CiEdit style={{ color: "white" }} size={25} />
                  </div>
                </div>
                <div className="flex  gap-5 mt-5">
                  <div className="w-[50%]">
                    <label className="text-[#8E8F8F]">First Name *</label>
                    <br />
                    <InputComponent className="text-input" />
                  </div>

                  <div className="w-[50%]">
                    <label className="text-[#8E8F8F]">Last Name *</label>
                    <br />
                    <InputComponent className="text-input" />
                  </div>
                </div>
                <div className="flex  gap-5 mt-5">
                  <div className="w-[50%]">
                    <label className="text-[#8E8F8F]">Nick Name</label>
                    <br />
                    <InputComponent className="text-input" />
                  </div>

                  <div className="w-[50%]">
                    <label className="text-[#8E8F8F]">Cell *</label>
                    <br />
                    <InputComponent className="text-input" />
                  </div>
                </div>
                <div className="flex  gap-4 mt-5">
                  <div className="w-[50%]">
                    <label className="text-[#8E8F8F]">Email *</label>
                    <br />
                    <InputComponent className="text-input" />
                  </div>

                  <div className="w-[50%]">
                    <label className="text-[#8E8F8F]">License *</label>
                    <br />
                    <InputComponent className="text-input" />
                  </div>
                </div>

                <div className="flex justify-center mt-5 gap-5 ">
                  <button className="text-[#F56C89] w-[429px] rounded-lg  h-[45px] bg-white border border-[#F56C89]">
                    Cancel
                  </button>
                  <button className="bg-[#34B7C1] w-[429px] h-[45px]  rounded-lg text-white flex justify-center items-center gap-2">
                    Save
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

export { CreateDriver, EditDriver };
