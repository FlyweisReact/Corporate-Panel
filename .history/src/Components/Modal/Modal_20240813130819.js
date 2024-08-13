/** @format */

import { Modal } from "antd";

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

export { CreateDriver };
