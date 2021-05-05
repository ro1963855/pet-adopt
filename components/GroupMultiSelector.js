import { useState } from "react"
import dynamic from "next/dynamic"

const Select = dynamic(() => import("react-select"), {
  ssr: false,
})

function GroupMultiSelector({placeholder, defaultValue, onChange: parentHandleChange, groupedOptions}) {
  const [selectedOption, setSelectedOption] = useState(defaultValue)

  function handleChange(selectedOption) {
    parentHandleChange(selectedOption)
    return setSelectedOption(selectedOption)
  }
  
  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const groupBadgeStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    display: 'inline-block',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  }

  const formatGroupLabel = data => (
    <div style={groupStyles}>
      <span>{data.label}</span>
      <span style={groupBadgeStyles}>{data.options.length}</span>
    </div>
  )

  return (
    <Select
      placeholder={placeholder}
      defaultValue={selectedOption}
      isMulti
      onChange={handleChange}
      options={groupedOptions}
      formatGroupLabel={formatGroupLabel}
    />
  )
}

export default GroupMultiSelector