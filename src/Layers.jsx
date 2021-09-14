import * as React from "react";
import { RadioGroup, Radio } from "baseui/radio";

export default (props) => {
  const { callback, index } = props;
  const [value, setValue] = React.useState(index || "0");
  return (
    <RadioGroup
      value={value}
      onChange={e => {
        typeof callback === 'function'
        && callback(+e.currentTarget.value)
        setValue(e.currentTarget.value)
      }}
      name="number"
    >
      <Radio 
        value="0">
            LA Level
        </Radio>
        <br/>
      <Radio
        value="1"
        // description="This is a radio description"
      >
        Police force level
      </Radio>
    </RadioGroup>
  );
}