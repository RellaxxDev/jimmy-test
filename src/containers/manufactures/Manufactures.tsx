import React, { useEffect } from "react";
import { Dispatch } from "redux";
import { connect, useDispatch } from "react-redux";

import { IManufacture } from "../../types/IManufacture";
import { AppState } from "../../redux/store/configureStore";
import Table from "../../components/table";
import { loadManufactures } from "../../redux/actions/manufactures";

interface ManufacturesStateProps {
  manufactures: IManufacture[];
}

type ManufacturesProps = ManufacturesStateProps;

const Manufactures: React.FC<ManufacturesProps> = (props) => {
  const { manufactures } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadManufactures());
  }, []);

  return manufactures.length > 0 ? <Table data={manufactures} /> : null;
};

const mapStateToProps = (state: AppState) => ({
  manufactures: state.manufactures,
});
const mapDispatchToProps = (dispatch: Dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Manufactures);
