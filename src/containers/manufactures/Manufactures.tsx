import React, { useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { IManufacture } from "../../types/IManufacture";
import { AppState } from "../../redux/store/configureStore";
import Table from "../../components/table";
import { getManufactures } from "../../redux/actions/manufactureActions";
import { resetModels } from "../../redux/actions/modelActions";

interface ManufacturesStateProps {
  manufactures: IManufacture[];
}

const StyledLink = styled(Link)`
  background: transparent;
  color: inherit;
  border: 2px solid #557d5c;
  border-radius: 5px;
  padding: 5px;
  cursor: pointer;
  text-decoration: none;
`;

const Manufactures: React.FC<ManufacturesStateProps> = (props) => {
  const { manufactures } = props;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getManufactures());
    dispatch(resetModels());
  }, []);

  const columns = [
    {
      title: "ID",
      key: "id",
    },
    {
      title: "Name",
      key: "name",
    },
    {
      title: "Country",
      key: "country",
    },
    {
      title: "Models",
      key: "models",
      render: (id: number) => <StyledLink to={`/${id}`}>Show</StyledLink>,
    },
  ];

  return <Table columns={columns} data={manufactures} />;
};

const mapStateToProps = (state: AppState) => ({
  manufactures: state.manufactures,
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Manufactures);
