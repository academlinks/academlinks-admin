import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

import { FilterBoxContainer, TabContainer } from "./fillterBox.styles";
import useUserFilter from "../../hooks/layout/useUserFilter";
import { generateFilterQuery } from "../../lib";

interface FillterBoxType {}

const TAB_KEYS = {
  LIVING_PLACE: "livingPlace",
  REGISTRATION: "registration",
  BIRTHDATE: "birthDate",
  GENDER: "gender",
  SORT: "sort",
};

const FillterBox: React.FC<FillterBoxType> = (props) => {
  const [tabs, setTabs] = useState({
    [TAB_KEYS.LIVING_PLACE]: false,
    [TAB_KEYS.REGISTRATION]: false,
    [TAB_KEYS.BIRTHDATE]: false,
    [TAB_KEYS.GENDER]: false,
    [TAB_KEYS.SORT]: false,
  });

  type KeysT = "livingPlace" | "registration" | "birthdate" | "gender" | "sort";
  function handleTab(
    e: React.MouseEvent<HTMLButtonElement> & { target: { value: KeysT } }
  ) {
    const target: KeysT = e.target.value;
    setTabs((prev) => ({
      ...prev,
      [target]: !tabs[target],
    }));
  }

  const filter = useAppSelector((state) => state.users.filter);
  const {
    filterByLivingPlace,
    filterByRegistrationDate,
    filterByBirthDate,
    filterByGender,
    sortUser,
  } = useUserFilter();

  useEffect(() => {
    const query = generateFilterQuery(filter);
    console.log(query);
  }, [filter]);
  return (
    <FilterBoxContainer>
      <TabContainer data-tab>
        <button
          value={TAB_KEYS.LIVING_PLACE}
          onClick={handleTab}
          className="tab-btn"
        >
          fillter by living place
        </button>
        {tabs[TAB_KEYS.LIVING_PLACE] && (
          <div className="tab-content">
            <div className="inp-field">
              <label className="inp-field__label">from country</label>
              <input
                placeholder="country"
                className="inp-field__input"
                value={filter.livingPlace?.from?.country}
                onChange={(e) =>
                  filterByLivingPlace({
                    target: "from",
                    nest: "country",
                    from: { country: e.target.value },
                  })
                }
              />
            </div>
            <div className="inp-field">
              <label className="inp-field__label">from city</label>
              <input
                placeholder="city"
                className="inp-field__input"
                value={filter.livingPlace?.from?.city}
                onChange={(e) =>
                  filterByLivingPlace({
                    target: "from",
                    nest: "city",
                    from: { city: e.target.value },
                  })
                }
              />
            </div>
            <div className="inp-field">
              <label className="inp-field__label">
                currently lives in country
              </label>
              <input
                placeholder="country"
                className="inp-field__input"
                value={filter.livingPlace?.current?.country}
                onChange={(e) =>
                  filterByLivingPlace({
                    target: "current",
                    nest: "country",
                    current: { country: e.target.value },
                  })
                }
              />
            </div>
            <div className="inp-field">
              <label className="inp-field__label">
                currently lives in city
              </label>
              <input
                placeholder="city"
                className="inp-field__input"
                value={filter.livingPlace?.current?.city}
                onChange={(e) =>
                  filterByLivingPlace({
                    target: "current",
                    nest: "city",
                    current: { city: e.target.value },
                  })
                }
              />
            </div>
          </div>
        )}
      </TabContainer>
      <TabContainer data-tab>
        <button
          value={TAB_KEYS.REGISTRATION}
          onClick={handleTab}
          className="tab-btn"
        >
          fillter by registration date
        </button>
        {tabs[TAB_KEYS.REGISTRATION] && (
          <div className="tab-content">
            <div className="inp-field">
              <label className="inp-field__label">date from</label>
              <input
                placeholder="MM-DD-YYYY"
                className="inp-field__input"
                value={filter.registration?.from}
                onChange={(e) =>
                  filterByRegistrationDate({
                    target: "from",
                    from: e.target.value,
                  })
                }
              />
            </div>
            <div className="inp-field">
              <label className="inp-field__label">date to</label>
              <input
                placeholder="MM-DD-YYYY"
                className="inp-field__input"
                value={filter.registration?.to}
                onChange={(e) =>
                  filterByRegistrationDate({
                    target: "to",
                    to: e.target.value,
                  })
                }
              />
            </div>
          </div>
        )}
      </TabContainer>
      <TabContainer data-tab>
        <button
          value={TAB_KEYS.BIRTHDATE}
          onClick={handleTab}
          className="tab-btn"
        >
          fillter by birthdate
        </button>
        {tabs[TAB_KEYS.BIRTHDATE] && (
          <div className="tab-content">
            <div className="inp-field">
              <label className="inp-field__label">date from</label>
              <input
                placeholder="MM-DD-YYYY"
                className="inp-field__input"
                value={filter.birthDate?.from}
                onChange={(e) =>
                  filterByBirthDate({ target: "from", from: e.target.value })
                }
              />
            </div>
            <div className="inp-field">
              <label className="inp-field__label">date to</label>
              <input
                placeholder="MM-DD-YYYY"
                className="inp-field__input"
                value={filter.birthDate?.to}
                onChange={(e) =>
                  filterByBirthDate({ target: "to", to: e.target.value })
                }
              />
            </div>
          </div>
        )}
      </TabContainer>
      <TabContainer data-tab>
        <button value={TAB_KEYS.GENDER} onClick={handleTab} className="tab-btn">
          gender
        </button>
        {tabs[TAB_KEYS.GENDER] && (
          <div className="tab-content">
            <button
              className="gender-btn"
              onClick={(e) => filterByGender("male")}
            >
              male
            </button>
            <button
              className="gender-btn"
              onClick={(e) => filterByGender("female")}
            >
              famale
            </button>
          </div>
        )}
      </TabContainer>
      <TabContainer data-tab className={tabs[TAB_KEYS.SORT] ? "active" : ""}>
        <button value={TAB_KEYS.SORT} onClick={handleTab} className="tab-btn">
          sort by
        </button>
        {tabs[TAB_KEYS.SORT] && (
          <div className="tab-content last">
            <button
              className="sort-btn"
              onClick={() => sortUser("registrationDate")}
            >
              registration date
            </button>
            <button className="sort-btn" onClick={() => sortUser("firstName")}>
              first name
            </button>
            <button className="sort-btn" onClick={() => sortUser("lastName")}>
              last name
            </button>
            <button className="sort-btn" onClick={() => sortUser("userName")}>
              user name
            </button>
            <button className="sort-btn" onClick={() => sortUser("age")}>
              age
            </button>
            <button className="sort-btn" onClick={() => sortUser("gender")}>
              gender
            </button>
          </div>
        )}
      </TabContainer>
    </FilterBoxContainer>
  );
};

export default FillterBox;
