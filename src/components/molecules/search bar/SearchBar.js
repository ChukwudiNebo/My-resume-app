import React from "react";
import Text from "../../atoms/text/Text";
import Button from "../../atoms/button/Button";
import Input from "../../atoms/input/Input";

const SearchBar = () => {
  return (
    <>
      <>
        <div>
          <div className="" id="DIV_007">
            <div className="input-text">
              <Text text={"10000+ resume you can choose from"} />
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <div
                className="d-lg-none d-xl-inline-block d-xl-flex d-none"
                id="EMAIL_DIV"
              >
                <Input
                  inputType="text"
                  inputName="search"
                  inputPlaceholder="Search by occupation"
                />
              </div>
              <div>
                <Button buttonText="Search" />
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default SearchBar;
