import React, {
  useCallback,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { Form } from '@unform/web';
import { Chart } from 'react-google-charts';
import { FiChevronRight, FiPlus, FiPlusSquare, FiPower, FiSave, FiXSquare } from 'react-icons/fi';
import { Console, count, info } from 'console';
import {
  ContainerFood,
  ContentFood,
  ContainerMain,
  WrapperContainerMeal,
  BreakFast,
  HeaderFoodBreakFast,
  Launch,
  HeaderFoodLaunch,
  Dinner,
  HeaderFoodDinner,
  ContentBreakFast,
  ContentLaunch,
  ContentDinner,
  WrapperTableContainer,
  ContentInfo,
  PorcetagemText,
  MealSaved,
  ContentMealSaved,
} from './styles';
import TableFoodInfo from '../../components/TableFoodInfo';
import Input from '../../components/input';
import Button from '../../components/button';
import api from '../../service/api';

interface FoodsProps {
  name: string;
  quantity: number;
  calories: number;
  sodium: number;
  fat: number;
  carbohydrate: number;
}

interface SavedFoodsProps {
  title?: string | null;
  meal: FoodsProps;
}

const Dashboard: React.FC = () => {
  const totalCalorias = 1600;
  const [breakFast, setBreakFast] = useState(false);
  const [launch, setLaunch] = useState(false);
  const [dinner, setDinner] = useState(false);
  const [searchFoods, setSearchFoods] = useState<FoodsProps[]>([]);
  const [foodsBreakFast, setFoodsBreakFast] = useState<FoodsProps[]>(() => {
    const storagedFood = localStorage.getItem('@Fatsecret:FoodsBreakFast');
    if (storagedFood) {
      return JSON.parse(storagedFood);
    }
    return [];
  });
  const [foodsLaunch, setFoodsLaunch] = useState<FoodsProps[]>(() => {
    const storagedFood = localStorage.getItem('@Fatsecret:FoodsLaunch');
    if (storagedFood) {
      return JSON.parse(storagedFood);
    }
    return [];
  });
  const [foodsDinner, setFoodsDinner] = useState<FoodsProps[]>(() => {
    const storagedFood = localStorage.getItem('@Fatsecret:FoodsDinner');
    if (storagedFood) {
      return JSON.parse(storagedFood);
    }
    return [];
  });
  const [listSavedMeal, setListSavedMeal] = useState<SavedFoodsProps[]>(() => {
    const storagedListFood = localStorage.getItem('@Fatsecret:ListSavedMeal');
    if (storagedListFood) {
      return JSON.parse(storagedListFood);
    }
    return [];
  });

  useEffect(() => {
    async function loadFoods() {
      const response = await api.get('/foods');
      setSearchFoods(response.data);
    }
    loadFoods();
  }, []);

  const handleShowBreakFast = () => {
    setBreakFast(!breakFast);
  };
  const handleShowLaunch = () => {
    setLaunch(!launch);
  };
  const handleShowDinner = () => {
    setDinner(!dinner);
  };

  const handleRemoveItem = useCallback(
    foodName => {
      const foodTeste = foodsBreakFast.filter(food => food.name !== foodName);

      setFoodsBreakFast(foodTeste);
    },
    [foodsBreakFast],
  );
  const handleRemoveItemLaunch = useCallback(
    foodName => {
      const foodTeste = foodsLaunch.filter(food => food.name !== foodName);

      setFoodsLaunch(foodTeste);
    },
    [foodsLaunch],
  );
  const handleRemoveItemDinner = useCallback(
    foodName => {
      const foodTeste = foodsDinner.filter(food => food.name !== foodName);

      setFoodsDinner(foodTeste);
    },
    [foodsDinner],
  );

  useEffect(() => {
    localStorage.setItem(
      '@Fatsecret:FoodsBreakFast',
      JSON.stringify(foodsBreakFast),
    );
  }, [foodsBreakFast]);
  useEffect(() => {
    localStorage.setItem('@Fatsecret:FoodsLaunch', JSON.stringify(foodsLaunch));
  }, [foodsLaunch]);
  useEffect(() => {
    localStorage.setItem('@Fatsecret:FoodsDinner', JSON.stringify(foodsDinner));
  }, [foodsDinner]);
  useEffect(() => {
    localStorage.setItem(
      '@Fatsecret:ListSavedMeal',
      JSON.stringify(listSavedMeal),
    );
  }, [listSavedMeal]);

  const totalFoodCalories = useMemo(() => {
    return foodsBreakFast.reduce((accumulator, food) => {
      return accumulator + food.calories;
    }, 0);
  }, [foodsBreakFast]);

  const totalFoodSodio = useMemo(() => {
    return foodsBreakFast.reduce((accumulator, food) => {
      return accumulator + food.sodium;
    }, 0);
  }, [foodsBreakFast]);

  const totalFoodFat = useMemo(() => {
    return foodsBreakFast.reduce((accumulator, food) => {
      return accumulator + food.fat;
    }, 0);
  }, [foodsBreakFast]);

  const totalFoodCarbohydrate = useMemo(() => {
    return foodsBreakFast.reduce((accumulator, food) => {
      return accumulator + food.carbohydrate;
    }, 0);
  }, [foodsBreakFast]);

  const totalFoodLaunchCalories = useMemo(() => {
    return foodsLaunch.reduce((accumulator, food) => {
      return accumulator + food.calories;
    }, 0);
  }, [foodsLaunch]);

  const totalFoodLaunchSodio = useMemo(() => {
    return foodsLaunch.reduce((accumulator, food) => {
      return accumulator + food.sodium;
    }, 0);
  }, [foodsLaunch]);

  const totalFoodLaunchFat = useMemo(() => {
    return foodsLaunch.reduce((accumulator, food) => {
      return accumulator + food.fat;
    }, 0);
  }, [foodsLaunch]);

  const totalFoodLaunchCarbohydrate = useMemo(() => {
    return foodsLaunch.reduce((accumulator, food) => {
      return accumulator + food.carbohydrate;
    }, 0);
  }, [foodsLaunch]);

  const totalFoodDinnerCalories = useMemo(() => {
    return foodsDinner.reduce((accumulator, food) => {
      return accumulator + food.carbohydrate;
    }, 0);
  }, [foodsDinner]);

  const totalFoodDinnerSodio = useMemo(() => {
    return foodsDinner.reduce((accumulator, food) => {
      return accumulator + food.carbohydrate;
    }, 0);
  }, [foodsDinner]);

  const totalFoodDinnerFat = useMemo(() => {
    return foodsDinner.reduce((accumulator, food) => {
      return accumulator + food.carbohydrate;
    }, 0);
  }, [foodsDinner]);

  const totalFoodDinnerCarbohydrate = useMemo(() => {
    return foodsDinner.reduce((accumulator, food) => {
      return accumulator + food.carbohydrate;
    }, 0);
  }, [foodsDinner]);

  const porcetagemCalories = useMemo(() => {
    return (
      100 -
      ((totalCalorias -
        totalFoodCalories -
        totalFoodLaunchCalories -
        totalFoodDinnerCalories) /
        totalCalorias) *
      100
    );
  }, [totalFoodCalories, totalFoodLaunchCalories, totalFoodDinnerCalories]);

  const totalCaloriesMeal = useMemo(() => {
    const total =
      totalFoodDinnerCalories + totalFoodLaunchCalories + totalFoodCalories;
    return total;
  }, [totalFoodCalories, totalFoodDinnerCalories, totalFoodLaunchCalories]);

  const totalSodioMeal = useMemo(() => {
    const total = totalFoodDinnerSodio + totalFoodLaunchSodio + totalFoodSodio;
    return total;
  }, [totalFoodDinnerSodio, totalFoodLaunchSodio, totalFoodSodio]);

  const totalFatMeal = useMemo(() => {
    const total = totalFoodDinnerFat + totalFoodLaunchFat + totalFoodFat;
    return total;
  }, [totalFoodDinnerFat, totalFoodFat, totalFoodLaunchFat]);

  const totalCarbohydrateMeal = useMemo(() => {
    const total =
      totalFoodDinnerCarbohydrate +
      totalFoodLaunchCarbohydrate +
      totalFoodCarbohydrate;
    return total;
  }, [
    totalFoodCarbohydrate,
    totalFoodDinnerCarbohydrate,
    totalFoodLaunchCarbohydrate,
  ]);

  const porcetagem = useMemo(() => {
    if (totalCaloriesMeal) return totalCalorias - totalCaloriesMeal;
    return totalCalorias;
  }, [totalCaloriesMeal]);

  const handleAddFood = useCallback(
    food => {
      const findFoodName = foodsBreakFast.find(
        foodName => foodName.name === food.name,
      );
      if (Number(porcetagemCalories.toFixed(0)) >= 100) {
        return;
      }
      if (!findFoodName) {
        setFoodsBreakFast([...foodsBreakFast, food]);
      }
    },
    [foodsBreakFast, porcetagemCalories],
  );

  const handleAddFoodLaunch = useCallback(
    food => {
      const findFoodName = foodsLaunch.find(
        foodName => foodName.name === food.name,
      );
      if (Number(porcetagemCalories.toFixed(0)) >= 100) {
        return;
      }
      if (!findFoodName) {
        setFoodsLaunch([...foodsLaunch, food]);
      }
    },
    [foodsLaunch, porcetagemCalories],
  );

  const handleAddFoodDinner = useCallback(
    food => {
      const findFoodName = foodsDinner.find(
        foodName => foodName.name === food.name,
      );
      if (Number(porcetagemCalories.toFixed(0)) >= 100) {
        return;
      }
      if (!findFoodName) {
        setFoodsDinner([...foodsDinner, food]);
      }
    },
    [foodsDinner, porcetagemCalories],
  );

  const handleAddSavedBreakFast = useCallback(
    meal => {
      const stringListSavedMeal = JSON.stringify(listSavedMeal);
      const stringMeal = JSON.stringify(meal);
      if (stringListSavedMeal.includes(stringMeal)) {
        return;
      }
      const nameMeal = prompt('Digite o nome da sua Refieçao');
      if (nameMeal === null) {
        return;
      }
      if (meal.length === 0) {
        return;
      }
      setListSavedMeal([
        ...listSavedMeal,
        {
          title: nameMeal || meal[0].name,
          meal,
        },
      ]);
    },
    [listSavedMeal],
  );

  const handleAddSavedFood = useCallback(
    (meal, mealChoice) => {
      if (mealChoice === 'cafe') {
        const mealNotExist = meal.every((item: FoodsProps) => {
          return foodsBreakFast.indexOf(item) === -1;
        });
        for (let indexMeal = 0; indexMeal < meal.length; indexMeal += 1) {
          if (mealNotExist) {
            setFoodsBreakFast([...foodsBreakFast, ...meal]);
          }
          const findFood = foodsBreakFast.find(
            (food: FoodsProps) => food.name === meal[indexMeal].name,
          );

          if (!findFood && !mealNotExist) {
            setFoodsBreakFast([...foodsBreakFast, meal[indexMeal]]);
          }
        }
      }
      if (mealChoice === 'almoço') {
        const mealNotExist = meal.every((item: FoodsProps) => {
          return foodsLaunch.indexOf(item) === -1;
        });
        for (let indexMeal = 0; indexMeal < meal.length; indexMeal += 1) {
          if (mealNotExist) {
            setFoodsLaunch([...foodsLaunch, ...meal]);
          }
          const findFood = foodsLaunch.find(
            (food: FoodsProps) => food.name === meal[indexMeal].name,
          );

          if (!findFood && !mealNotExist) {
            setFoodsLaunch([...foodsLaunch, meal[indexMeal]]);
          }
        }
      }
      if (mealChoice === 'jantar') {
        const mealNotExist = meal.every((item: FoodsProps) => {
          return foodsDinner.indexOf(item) === -1;
        });
        for (let indexMeal = 0; indexMeal < meal.length; indexMeal += 1) {
          if (mealNotExist) {
            setFoodsDinner([...foodsDinner, ...meal]);
          }
          const findFood = foodsDinner.find(
            (food: FoodsProps) => food.name === meal[indexMeal].name,
          );

          if (!findFood && !mealNotExist) {
            setFoodsDinner([...foodsDinner, meal[indexMeal]]);
          }
        }
      }
    },

    [foodsBreakFast, foodsDinner, foodsLaunch],
  );

  const handleSelectMeal = useCallback(
    (meal, event) => {
      switch (event.target.value) {
        case 'cafe':
          handleAddSavedFood(meal, event.target.value);
          break;
        case 'almoço':
          handleAddSavedFood(meal, event.target.value);
          break;
        case 'jantar':
          handleAddSavedFood(meal, event.target.value);
          break;
        default:
          console.log('cafe');
      }
    },
    [handleAddSavedFood],
  );

  const handleRemoveSavedItemFoodBreakfast = useCallback(
    food => {
      const removeSaveditem = listSavedMeal.filter(
        removedItem => removedItem.meal !== food,
      );
      setListSavedMeal(removeSaveditem);
    },
    [listSavedMeal],
  );
  return (
    <ContainerMain>
      <ContainerFood>
        <ContentFood>
          <ContentInfo>
            <PorcetagemText>
              <Chart
                chartType="PieChart"

                data={[
                  ['calorias', 'valor Calorias'],
                  ['Calorias Ingeridas', totalCaloriesMeal],
                  ['Calorias Restates', porcetagem],
                ]}
                options={{
                  legend: 'none',
                  pieHole: 0.65,
                  pieSliceText: 'none',
                  slices: {
                    0: { color: '#28df99' },
                    1: { color: '#333333' },
                  },
                  enableInteractivity: false,
                  pieSliceBorderColor: 'transparent',
                  backgroundColor: 'transparent',
                }}
              />
              <p>{`${porcetagemCalories.toFixed(0)}%`}  </p>
            </PorcetagemText>
            <table>
              <thead>
                <tr>
                  <th>Sodio </th>
                  <th>Carboidrato</th>
                  <th>Gorduras</th>
                  <th>Calorias</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{`${totalSodioMeal} g`}</td>
                  <td>{`${totalCarbohydrateMeal} g`}</td>
                  <td>{`${totalFatMeal} g`}</td>
                  <td>{`${totalCaloriesMeal} kcl`}</td>
                </tr>
              </tbody>
            </table>
          </ContentInfo>
          <WrapperContainerMeal>
            <HeaderFoodBreakFast>
              <div>
                <h1>Café da Manhã</h1>
                <FiSave
                  size={24}
                  onClick={() => {
                    handleAddSavedBreakFast(foodsBreakFast);
                  }}
                  color="#28df99"
                />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sodio </th>
                    <th>Carboidrato</th>
                    <th>Gorduras</th>
                    <th>Calorias</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{`${totalFoodSodio || 0} g`}</td>
                    <td>{`${totalFoodCarbohydrate || 0} g`}</td>
                    <td>{`${totalFoodFat || 0} g`}</td>
                    <td>{`${totalFoodCalories || 0} kcl`}</td>
                  </tr>
                </tbody>
              </table>
              <FiPlusSquare size={40} onClick={handleShowBreakFast} color="#28df99" />
            </HeaderFoodBreakFast>
            <WrapperTableContainer>
              {foodsBreakFast.length !== 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Quantidade</th>
                      <th>Calorias</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodsBreakFast.map(food => (
                      <tr key={food.name}>
                        <td>{food.name}</td>
                        <td>{food.quantity}</td>
                        <td>{food.calories}</td>
                        <td onClick={() => handleRemoveItem(food.name)}>
                          <FiXSquare size={25} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </WrapperTableContainer>
            <BreakFast show={breakFast}>
              <FiXSquare onClick={handleShowBreakFast} size={55} />
              <ContentBreakFast>
                {searchFoods.map(food => (
                  <div
                    key={food.name}
                    onClick={() => handleAddFood(food)}
                    role="button"
                    tabIndex={0}
                  >
                    <p>{food.name}</p>
                    <p>{food.quantity}</p>
                    <p>{food.calories}</p>
                  </div>
                ))}
              </ContentBreakFast>
            </BreakFast>
          </WrapperContainerMeal>

          <WrapperContainerMeal>
            <HeaderFoodLaunch>
              <div>
                <h1>Almoço</h1>
                <FiSave size={24} onClick={() => { }} color="#28df99" />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sodio </th>
                    <th>Carboidrato</th>
                    <th>Gorduras</th>
                    <th>Calorias</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{`${totalFoodLaunchSodio || 0} g`}</td>
                    <td>{`${totalFoodLaunchSodio || 0} g`}</td>
                    <td>{`${totalFoodLaunchSodio || 0} g`}</td>
                    <td>{`${totalFoodLaunchSodio || 0} kcl`}</td>
                  </tr>
                </tbody>
              </table>
              <FiPlusSquare size={40} color="#28df99" onClick={handleShowLaunch} />
            </HeaderFoodLaunch>
            <WrapperTableContainer>
              {foodsLaunch.length !== 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Quantidade</th>
                      <th>Calorias</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodsLaunch.map(food => (
                      <tr key={food.name}>
                        <td>{food.name}</td>
                        <td>{food.quantity}</td>
                        <td>{food.calories}</td>
                        <td onClick={() => handleRemoveItemLaunch(food.name)}>
                          <FiXSquare size={25} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </WrapperTableContainer>
            <Launch show={launch}>
              <FiXSquare onClick={handleShowLaunch} size={55} />
              <ContentLaunch>
                {searchFoods.map(food => (
                  <div
                    key={food.name}
                    onClick={() => handleAddFoodLaunch(food)}
                    role="button"
                    tabIndex={0}
                  >
                    <p>{food.name}</p>
                    <p>{food.quantity}</p>
                    <p>{food.calories}</p>
                  </div>
                ))}
              </ContentLaunch>
            </Launch>
          </WrapperContainerMeal>

          <WrapperContainerMeal>
            <HeaderFoodDinner>
              <div>
                <h1>Jantar</h1>
                <FiSave size={24} onClick={() => { }} color="#28df99" />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Sodio </th>
                    <th>Carboidrato</th>
                    <th>Gorduras</th>
                    <th>Calorias</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{`${totalFoodDinnerSodio || 0} g`}</td>
                    <td>{`${totalFoodDinnerSodio || 0} g`}</td>
                    <td>{`${totalFoodDinnerFat || 0} g`}</td>
                    <td>{`${totalFoodDinnerSodio || 0} kcl`}</td>
                  </tr>
                </tbody>
              </table>
              <FiPlusSquare size={40} color="#28df99" onClick={handleShowDinner} />
            </HeaderFoodDinner>
            <WrapperTableContainer>
              {foodsDinner.length !== 0 && (
                <table>
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Quantidade</th>
                      <th>Calorias</th>
                    </tr>
                  </thead>
                  <tbody>
                    {foodsDinner.map(food => (
                      <tr key={food.name}>
                        <td>{food.name}</td>
                        <td>{food.quantity}</td>
                        <td>{food.calories}</td>
                        <td onClick={() => handleRemoveItemDinner(food.name)}>
                          <FiXSquare size={25} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </WrapperTableContainer>
            <Dinner show={dinner}>
              <FiXSquare onClick={handleShowDinner} size={55} />
              <ContentDinner>
                {searchFoods.map(food => (
                  <div
                    key={food.name}
                    onClick={() => handleAddFoodDinner(food)}
                    role="button"
                    tabIndex={0}
                  >
                    <p>{food.name}</p>
                    <p>{food.quantity}</p>
                    <p>{food.calories}</p>
                  </div>
                ))}
              </ContentDinner>
            </Dinner>
          </WrapperContainerMeal>
        </ContentFood>
        <MealSaved>
          <h1>Refeiçoes Salvas</h1>
          {listSavedMeal.map(food => (
            <ContentMealSaved key={food.title}>
              <button type="button">
                <p>{food.title}</p>
              </button>
              <FiXSquare
                size={35}
                onClick={() => handleRemoveSavedItemFoodBreakfast(food.meal)}
              />
              <select
                name="choice"
                id="choice"
                value="selecione"
                onChange={event => handleSelectMeal(food.meal, event)}
              >
                <option value="selecione">Selecione</option>
                <option value="cafe">Café da Manhã</option>
                <option value="almoço">Almoço</option>
                <option value="jantar">Jantar</option>
              </select>
            </ContentMealSaved>
          ))}
        </MealSaved>
      </ContainerFood>
    </ContainerMain>
  );
};

export default Dashboard;
