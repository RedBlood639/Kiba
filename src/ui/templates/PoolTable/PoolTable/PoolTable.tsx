import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import {
  TableLayout,
  Text,
  MarginDiv,
  Row,
  Col,
  OptionList,
  OptionItem,
  SearchBar,
  SearchInput,
  Table,
  Layout,
  Content,
} from "./PoolTable.styled";

const COLORS = ["#0177FB", "#FFD95C"];

import { PoolListData } from "Types/components/PoolList";
import { Go, Search, Public, Point } from "assets/icon";

const LiquidityTable: React.FC<{
  tableData: PoolListData[];
}> = ({ tableData }) => {
  return (
    <TableLayout>
      <Text weight="600" color="white" size={18} lineHeight={28}>
        My Pool List
      </Text>
      <MarginDiv top={24} bottom={24}>
        <Content>
          <OptionList>
            <OptionItem active>All Pools</OptionItem>
            <OptionItem>Public Pool</OptionItem>
            <OptionItem>Private Pool</OptionItem>
            <OptionItem>Pegged Pool</OptionItem>
          </OptionList>
          <SearchBar>
            <MarginDiv right={8}>
              <Search iSize={{ x: 24, y: 24 }}></Search>
            </MarginDiv>
            <SearchInput placeholder="Search Token Symbol / Pool Address"></SearchInput>
          </SearchBar>
        </Content>
      </MarginDiv>
      <Layout>
        <Table>
          <thead>
            <tr>
              <th>Pool</th>
              <th>Free Rate</th>
              <th>Liquidity</th>
              <th>My Liquidity</th>
              <th>Volume (24h)</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => {
              const list = [
                { name: "Group A", value: 1 },
                { name: "Group B", value: 1 },
              ];
              list[0].name = item.liquidityFirstType;
              list[1].name = item.liquiditySecondType;
              list[0].value = item.liquidityFirstAmount;
              list[1].value = item.liquiditySecondAmount;
              return (
                <tr key={index}>
                  <td>
                    <Col between={2}>
                      <Row between={8}>
                        <Text weight="600" size={14} color="white">
                          {item.address}
                        </Text>
                        <Go></Go>
                      </Row>
                      <Row between={6}>
                        <Public></Public>
                        <Text
                          weight="600"
                          size={12}
                          lineHeight={18}
                          color="#0177FB"
                        >
                          {item.access}
                        </Text>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Text weight="400" color="white" size={14}>
                      {item.freeRate}
                    </Text>
                  </td>
                  <td>
                    <Row>
                      <PieChart width={48} height={48}>
                        <Pie
                          data={list}
                          cx={21}
                          cy={21}
                          labelLine={false}
                          outerRadius={21}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {list.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                      </PieChart>
                      <MarginDiv>
                        <Col>
                          <Row>
                            <Point />
                            <Text color="white" size={14} weight="400">
                              {item.liquidityFirstAmount +
                                " " +
                                item.liquidityFirstType}
                            </Text>
                          </Row>
                          <MarginDiv top={2}>
                            <Row>
                              <Point iColor="#FFD95C" />
                              <Text color="white" size={14} weight="400">
                                {item.liquiditySecondAmount +
                                  " " +
                                  item.liquiditySecondType}
                              </Text>
                            </Row>
                          </MarginDiv>
                        </Col>
                      </MarginDiv>
                    </Row>
                  </td>
                  <td>
                    <Col between={2}>
                      <Row between={8}>
                        <item.liquidityFirstIcon iSize={{ x: 24, y: 24 }} />
                        <Text weight="400" color="white" size={14}>
                          {item.liquidityFirstType}
                        </Text>
                      </Row>
                      <Row between={8}>
                        <item.liquiditySecondIcon iSize={{ x: 24, y: 24 }} />
                        <Text weight="400" color="white" size={14}>
                          {item.liquiditySecondType}
                        </Text>
                      </Row>
                    </Col>
                  </td>
                  <td>
                    <Row right>
                      <Text weight="400" color="white" size={14}>
                        {item.volume}
                      </Text>
                    </Row>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Layout>
    </TableLayout>
  );
};
export default LiquidityTable;
