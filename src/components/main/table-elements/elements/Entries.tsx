import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../../../redux/reducers";
import { updateTableEntries } from "../../../../redux/actions/tickets";

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const Entries: React.FC<Props> = (props) => {
  const { tickets, entries, updateTableEntries } = props;
  const [tableEntries, setTableEntries] = useState<number>();

  useEffect(() => {
    setTableEntries(entries);
  }, [entries]);

  const onSelectTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateTableEntries(parseInt(e.target.value, 10));
  };
  return (
    <div className="form-group">
      <select
        name="entries"
        className="form-control form-control-sm"
        value={tableEntries}
        onChange={onSelectTag}
        style={selectTagStyle}
      >
        <option value="5">5</option>
        <option value="7">7</option>
        <option value="10">10</option>
        <option value={tickets.length}>All</option>
      </select>
    </div>
  );
};

const selectTagStyle = {
  backgroundColor: "#8a929a",
  color: "white",
  border: "none",
  width: "100px",
  height: "auto"
};

const mapStateToProps = (state: RootState) => ({
  entries: state.tickets.entries,
  tickets: state.tickets.tickets
});

const mapDispatchToProps = { updateTableEntries };

export default connect(mapStateToProps, mapDispatchToProps)(Entries);
