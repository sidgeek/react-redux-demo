import {
  useCount,
  useDispatchUpdateCount,
  useCount2,
  useDispatchUpdateCount2Value,
  useDispatchUpdateCount2Status
} from "../store/hooks/use-global-status";

export default function DashBoard() {
  const count = useCount();
  const dispatchUpdateCount = useDispatchUpdateCount();
  const count2 = useCount2();
  const dispatchUpdateCount2Value = useDispatchUpdateCount2Value();
  const dispatchUpdateCount2Status = useDispatchUpdateCount2Status();
  

  return (
    <div style={{ display: "flex", flexDirection: "column", marginLeft: 100 }}>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            dispatchUpdateCount(count + 1);
          }}
        >
          button1
        </button>
        <p style={{ width: 200 }}> {count}</p>
      </div>
      <div style={{ display: "flex" }}>
        <button
          onClick={() => {
            dispatchUpdateCount2Value(count2.value + 1);
          }}
        >
          button2
        </button>
        <p style={{ width: 200 }}> {count2.value}</p>
        <p
          style={{ width: 200 }}
          onClick={() => {
            dispatchUpdateCount2Status(!count2.status.isValid);
          }}
        >
          {count2.status.isValid ? "打开" : "关闭"}
        </p>
      </div>
    </div>
  );
}
