import * as React from "react";
import { RadioGroup, Radio } from "baseui/radio";
import { layers } from './utils';

/**
 * align: ALIGN.vertical does not work
 * so does
 * {layers.map((e, i) =>
        <>
          <Radio
          value={i + ""}>
          {e.name}
        </Radio><br/>
        </>)
      } i
  * insideRadioGroup
  * hence below
 */
const buttons = [];
layers.forEach((e, i) => {
  buttons.push(
    <Radio
      value={i + ""}>
      {e.name}
    </Radio>
  )
  if(i % 2 === 0) buttons.push(<br/>)
})
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
    // align="vertical"
    >
    {buttons}
    </RadioGroup>
  );
}