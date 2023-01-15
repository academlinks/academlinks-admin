import React, { useState, useEffect } from "react";
import { useAppSelector } from "../../store/hooks";

import { generateFilterQuery } from "../../lib/generateFilterQuery";
import { useUserFilter, useUsersQuery } from "../../hooks";
import {
  selectUserDBFilter,
  selectUsersLocaleFilter,
} from "../../store/selectors/userSelectors";

import {
  TAB_KEYS,
  FilterKeysT,
  FilterPositionKeys,
  FilterPositionT,
  FilterSortKeys,
  FilterSortT,
  FilterGenderKeys,
  FilterGenderT,
} from "../../interface/reducers/usersReducer.types";

import { FilterBoxContainer, TabContainer } from "./fillterBox.styles";
import { Button } from "../Layouts";

const FillterBox: React.FC = () => {
  const [tabs, setTabs] = useState({
    [TAB_KEYS.LIVING_PLACE]: false,
    [TAB_KEYS.REGISTRATION]: false,
    [TAB_KEYS.BIRTHDATE]: false,
    [TAB_KEYS.POSITION]: false,
    [TAB_KEYS.GENDER]: false,
    [TAB_KEYS.SORT]: false,
    [TAB_KEYS.USER_NAME]: false,
  });

  function handleTab(
    e: React.MouseEvent<HTMLButtonElement> & { target: { value: FilterKeysT } }
  ) {
    const target: FilterKeysT = e.target.value;

    setTabs((prev) => ({
      ...prev,
      [target]: !tabs[target],
    }));
  }

  const [query, setQuery] = useState("");

  const filter = useAppSelector(selectUserDBFilter);
  const filterLocale = useAppSelector(selectUsersLocaleFilter);

  const {
    filterByUserName,
    filterByLivingPlace,
    filterByRegistrationDate,
    filterByBirthDate,
    filterByPosition,
    filterByGender,
    sortUser,
    handleResetFilter,
    handleResetLocaleFilter,
  } = useUserFilter();

  const { getUserLabelsQuery } = useUsersQuery();

  function resetFilterBox() {
    handleResetFilter();
    handleResetLocaleFilter();

    setTabs((prev) => ({
      ...prev,
      [TAB_KEYS.USER_NAME]: false,
      [TAB_KEYS.LIVING_PLACE]: false,
      [TAB_KEYS.REGISTRATION]: false,
      [TAB_KEYS.BIRTHDATE]: false,
      [TAB_KEYS.POSITION]: false,
      [TAB_KEYS.GENDER]: false,
      [TAB_KEYS.SORT]: false,
    }));
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      const queryStr = generateFilterQuery(filter);
      setQuery(queryStr);
    }, 1000);

    return () => clearTimeout(timer);
  }, [filter]);

  return (
    <>
      <FilterBoxContainer>
        <TabContainer data-tab>
          <button
            value={TAB_KEYS.USER_NAME}
            onClick={handleTab}
            className="tab-btn"
          >
            fillter by username
          </button>

          {tabs[TAB_KEYS.USER_NAME] && (
            <div className="tab-content">
              <div className="inp-field">
                <label className="inp-field__label">username</label>
                <input
                  placeholder="username"
                  className="inp-field__input"
                  value={filter.userName || ""}
                  onChange={(e) => filterByUserName(e.target.value)}
                />
              </div>
            </div>
          )}
        </TabContainer>

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
                  value={filter.livingPlace?.from?.country || ""}
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
                  value={filter.livingPlace?.from?.city || ""}
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
                  value={filter.livingPlace?.current?.country || ""}
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
                  value={filter.livingPlace?.current?.city || ""}
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
                  value={filter.registration?.from || ""}
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
                  value={filter.registration?.to || ""}
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
                  value={filter.birthDate?.from || ""}
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
                  value={filter.birthDate?.to || ""}
                  onChange={(e) =>
                    filterByBirthDate({ target: "to", to: e.target.value })
                  }
                />
              </div>
            </div>
          )}
        </TabContainer>

        <TabContainer data-tab>
          <button
            value={TAB_KEYS.POSITION}
            onClick={handleTab}
            className="tab-btn"
          >
            position
          </button>

          {tabs[TAB_KEYS.POSITION] && (
            <div className="tab-content">
              {FilterPositionKeys.map((key) => (
                <button
                  key={`position-by--${key.type}`}
                  value={key.type}
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement> & {
                      target: { value: FilterPositionT };
                    }
                  ) => filterByPosition(e.target.value)}
                  className={`position-btn ${
                    filter.position === key.type ? "active" : ""
                  }`}
                >
                  {key.label}
                </button>
              ))}
            </div>
          )}
        </TabContainer>

        <TabContainer data-tab>
          <button
            value={TAB_KEYS.GENDER}
            onClick={handleTab}
            className="tab-btn"
          >
            gender
          </button>

          {tabs[TAB_KEYS.GENDER] && (
            <div className="tab-content">
              {FilterGenderKeys.map(
                (key) =>
                  key.type !== "default" && (
                    <button
                      key={key.type}
                      value={key.type}
                      className={`gender-btn ${
                        filterLocale.gender === key.type ? "active" : ""
                      }`}
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement> & {
                          target: { value: FilterGenderT };
                        }
                      ) => filterByGender(e.target.value)}
                    >
                      {key.label}
                    </button>
                  )
              )}
            </div>
          )}
        </TabContainer>

        <TabContainer data-tab className={tabs[TAB_KEYS.SORT] ? "active" : ""}>
          <button value={TAB_KEYS.SORT} onClick={handleTab} className="tab-btn">
            sort by
          </button>

          {tabs[TAB_KEYS.SORT] && (
            <div className="tab-content last">
              {FilterSortKeys.map(
                (key) =>
                  key.type !== "default" && (
                    <button
                      key={`sortable-${key.label}`}
                      value={key.type}
                      onClick={(
                        e: React.MouseEvent<HTMLButtonElement> & {
                          target: { value: FilterSortT };
                        }
                      ) => sortUser(e.target.value)}
                      className={`sort-btn ${
                        filterLocale.sort === key.type ? "active" : ""
                      }`}
                    >
                      {key.label}
                    </button>
                  )
              )}
            </div>
          )}
        </TabContainer>
      </FilterBoxContainer>

      <Button label="search" onClick={() => getUserLabelsQuery({ query })} />
      <Button label="reset filter" onClick={() => resetFilterBox()} />
    </>
  );
};

export default FillterBox;
