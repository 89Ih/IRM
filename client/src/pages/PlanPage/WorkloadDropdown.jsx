import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

const WorkloadDropdown = (props) => {
 const{content}= useContext(AuthContext)
  const { classSelect, classOption, value, onChange, workloadOptions } = props;
  return (
    <select
      className={classSelect}
      placeholder={content.workload}
      value={value}
      onChange={onChange}
    >
      <option defaultValue="selected" className={classOption}>
        ...
      </option>
      {workloadOptions?.map(({ opt }) => (
        <option key={`opt${opt}`} value={opt} className={classOption}>
          {opt}%
        </option>
      ))}
    </select>
  );
};

export default WorkloadDropdown;
