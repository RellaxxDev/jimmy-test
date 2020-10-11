import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { AppState } from "../../redux/store/configureStore";
import Table from "../../components/table";
import { IModel } from "../../types/IModel";
import { getModels } from "../../redux/actions/modelActions";

interface ModelsStateProps {
  models: IModel[];
}

interface ModelOwnProps {
  make: string
}

const Models: React.FC<ModelsStateProps> = (props) => {
  const { models } = props;
  const { make } = useParams<ModelOwnProps>();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getModels(make));
  }, []);

  const columns = [
    {
      title: "ID",
      key: "id"
    },
    {
      title: "Name",
      key: "name"
    }
  ];

  return <Table columns={columns} data={models} />;
};

const mapStateToProps = (state: AppState) => ({
  models: state.models,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Models);
