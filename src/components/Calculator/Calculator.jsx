import React, { useState } from "react";

import Button from "../Button";
import Screen from "../Screen";
import LastOperation from "../LastOperation";
import {
  CalculatorWrapper,
  ButtonList,
  Row,
  Left,
  Right,
  ButtonContainer
} from "./Calculator.styles";

const Calculator = () => {
  const [lastOperation, setLastOperation] = useState("");
  const [currentNumber, setCurrentNumber] = useState("0");
  const [operatorFlag, setOperatorFlag] = useState(false);
  const [decimalFlag, setDecimalFlag] = useState(false);

  const getButtonValues = (type = "left") => {
    const colors = {
      orange: "#ff8c00",
      orangeLinear: "linear-gradient(to bottom, #ff8c00, #fd6c1b)",
      pink: "#ff0080",
      pinkLinear: "linear-gradient(to bottom, #ff0080, #fb0f4c)",
      red: "#fb155D"
    };

    const values = {
      top: [
        {
          id: "clear",
          value: "C",
          isOval: true,
          backgroundColor: "#fff",
          textColor: colors.red
        },
        {
          id: "percentage",
          value: "%",
          isOval: true,
          backgroundColor: colors.orange,
          backgroundImage: colors.orangeLinear
        },
        {
          id: "divide",
          value: "/",
          isOval: true,
          backgroundColor: colors.orange,
          backgroundImage: colors.orangeLinear
        },
        {
          id: "multiply",
          value: "*",
          display: "X",
          isOval: true,
          backgroundColor: colors.orange,
          backgroundImage: colors.orangeLinear
        }
      ],
      left: [
        { id: "one", value: "1" },
        { id: "two", value: "2" },
        { id: "three", value: "3" },
        { id: "four", value: "4" },
        { id: "five", value: "5" },
        { id: "six", value: "6" },
        { id: "seven", value: "7" },
        { id: "eight", value: "8" },
        { id: "nine", value: "9" },
        { id: "remove", value: "←", isOval: true, backgroundColor: "#34386A" },
        { id: "zero", value: "0" },
        { id: "decimal", value: "." }
      ],
      right: [
        {
          id: "add",
          value: "+",
          isOval: true,
          backgroundColor: colors.orange,
          backgroundImage: colors.orangeLinear
        },
        {
          id: "subtract",
          value: "-",
          isOval: true,
          backgroundColor: colors.orange,
          backgroundImage: colors.orangeLinear
        },
        {
          id: "equals",
          value: "=",
          isLong: true,
          backgroundColor: colors.pink,
          backgroundImage: colors.pinkLinear
        }
      ]
    };

    return values[type];
  };

  const handleButtonClick = buttonValue => () => {
    switch (buttonValue) {
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9": {
        if (currentNumber !== "0") {
          setCurrentNumber(currentNumber + buttonValue);
          setOperatorFlag(false);
        } else {
          setCurrentNumber(buttonValue);
        }
        break;
      }
      case "*":
      case "+":
      case "-":
      case "/":
      case "%": {
        if (!operatorFlag) {
          setCurrentNumber(currentNumber + buttonValue);
          setOperatorFlag(buttonValue);
        } else {
          const newNumber = currentNumber.slice(0, currentNumber.length - 1);
          setCurrentNumber(newNumber + buttonValue);
        }
        break;
      }
      case "C":
        setLastOperation("");
        setCurrentNumber("0");
        break;
      case "=":
        setLastOperation(currentNumber);
        const result = currentNumber.includes(".")
          ? eval(currentNumber).toFixed(2)
          : eval(currentNumber);
        setCurrentNumber(result);

        break;
      case ".":
        if (!decimalFlag) {
          setCurrentNumber(currentNumber + ".");
          setDecimalFlag(true);
        }
        break;
      case "←":
        const newNumber =
          currentNumber.length > 1
            ? currentNumber.slice(0, currentNumber.length - 1)
            : "0";
        setCurrentNumber(newNumber);
        break;
      default:
        break;
    }
  };

  return (
    <CalculatorWrapper>
      <LastOperation operation={lastOperation} />
      <Screen currentNumber={currentNumber} isAnimated={false} />
      <ButtonList>
        <Row>
          <ButtonContainer>
            {getButtonValues("top").map(btn => (
              <Button
                key={btn.id}
                {...btn}
                onClick={handleButtonClick(btn.value)}
              />
            ))}
          </ButtonContainer>
        </Row>
        <Row>
          <Left>
            <ButtonContainer>
              {getButtonValues("left").map(btn => (
                <Button
                  key={btn.id}
                  {...btn}
                  onClick={handleButtonClick(btn.value)}
                />
              ))}
            </ButtonContainer>
          </Left>
          <Right marginLeft="11px">
            <ButtonContainer>
              {getButtonValues("right").map(btn => (
                <Button
                  key={btn.id}
                  {...btn}
                  onClick={handleButtonClick(btn.value)}
                  noMargin
                />
              ))}
            </ButtonContainer>
          </Right>
        </Row>
      </ButtonList>
    </CalculatorWrapper>
  );
};

export default Calculator;
