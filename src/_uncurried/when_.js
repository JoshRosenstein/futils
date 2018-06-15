

export default (condition, whenTrueFn,input) => {
    const flag = typeof condition === "boolean" ? condition : condition(input);
return flag? whenTrueFn(input):input
    
  };
