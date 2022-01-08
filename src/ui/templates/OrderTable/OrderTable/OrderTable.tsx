import React from "react";

import {
  OrderTableLayout,
  TitleLayout,
  OrderTable,
  ReceivedLayout,
  TextLayout,
  IconLayout,
  Text,
  Row,
  TableLayout,
} from "./OrderTable.styled";

import { TableData } from "Types/components/Table";
const OrderTableCom: React.FC<{
  tableData: TableData[];
}> = ({ tableData }) => {
  return (
    <OrderTableLayout>
      <TitleLayout>Order History</TitleLayout>
      <TableLayout>
        <OrderTable>
          <thead>
            <tr>
              <th>Receiveed</th>
              <th>Paid</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr key={index}>
                <td>
                  <ReceivedLayout>
                    <IconLayout>
                      <item.receiveCoinIcon />
                    </IconLayout>
                    <TextLayout>
                      <Text color={"white"} size={16} weight={"600"}>
                        {item.receiveCoinAmount + " " + item.receiveCoinType}
                      </Text>
                      <Text color={"#AEAFC2"} size={12} weight={"normal"}>
                        {item.time}
                      </Text>
                    </TextLayout>
                  </ReceivedLayout>
                </td>
                <td>
                  <Text color={"white"} size={16} weight={"600"}>
                    {item.paidCoinAmount + " " + item.painCoinType}
                  </Text>
                </td>
                <td>
                  <Row>
                    <Text color={"white"} size={16} weight={"600"}>
                      {item.receiveCoinType + " /"}
                    </Text>
                    <Text color={"#AEAFC2"} size={16} weight={"600"}>
                      {item.painCoinType + " "}
                    </Text>
                    <Text color={"white"} size={16} weight={"600"}>
                      {item.price}
                    </Text>
                  </Row>
                </td>
                <td>
                  <Text color={"#53F3C3"} size={14} weight={"normal"}>
                    {item.price}
                  </Text>
                </td>
              </tr>
            ))}
          </tbody>
        </OrderTable>
      </TableLayout>
    </OrderTableLayout>
  );
};
export default OrderTableCom;
