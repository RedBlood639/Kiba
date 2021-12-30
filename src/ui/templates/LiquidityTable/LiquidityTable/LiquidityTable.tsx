import React from "react";

import {
  TableLayout,
  TitleLayout,
  Table,
  PoolLayout,
  FirstIconLayout,
  SecondIconLayout,
  IconLayout,
  Text,
  Row,
  ButtonLayout,
  Button,
} from "./LiquidityTable.styled";

import { LiquidityTableData } from "Types/components/Table";
import { Go } from "assets/icon";

const LiquidityTable: React.FC<{
  tableData: LiquidityTableData[];
}> = ({ tableData }) => {
  return (
    <TableLayout>
      <TitleLayout>My Liquidity</TitleLayout>
      <Table>
        <thead>
          <tr>
            <th>Pool</th>
            <th>My Liquidity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td>
                <PoolLayout>
                  <IconLayout>
                    <FirstIconLayout>
                      <item.firstCoinIcon iSize={{ x: 40, y: 40 }} />
                    </FirstIconLayout>
                    <SecondIconLayout>
                      <item.secondCoinIcon iSize={{ x: 40, y: 40 }} />
                    </SecondIconLayout>
                    <Text color={"white"} size={16} weight={"600"}>
                      {item.poolAddress}
                    </Text>
                  </IconLayout>
                  <Go></Go>
                </PoolLayout>
              </td>
              <td>
                <Row>
                  <Text color={"white"} size={16} weight={"600"}>
                    {item.firstCoinAmount +
                      " " +
                      item.firstCoinType +
                      " / " +
                      item.secondCoinAmount +
                      " " +
                      item.secondCoinType}
                  </Text>
                </Row>
              </td>
              <td>
                <ButtonLayout>
                  <Button>Manager</Button>
                  <Button>Details</Button>
                </ButtonLayout>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </TableLayout>
  );
};
export default LiquidityTable;
