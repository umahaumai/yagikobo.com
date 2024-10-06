import Latest from '@/blog/components/Latest';
import {
  Box,
  Divider,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import * as React from 'react';

const rows = [
  ['社名', '株式会社やぎ工房'],
  ['設立', '2023年10月 6日'],
  ['代表者', '小林 靖'],
  ['事業目的', ['スマートフォン向けアプリケーションの開発、運営', 'その他、情報技術に関する事業']],
  ['資本金', '1,000,000円'],
  ['従業員数', '1名（代表のみ）'],
];

export default function Company() {
  return (
    <Box>
      <Box sx={{ p: 2 }}>
        <Typography variant="h1">会社概要</Typography>
      </Box>
      <Divider sx={{ my: 2 }} />
      <TableContainer component={Paper} sx={{ mb: 6 }}>
        <Table sx={{ minWidth: 650 }}>
          <TableBody>
            {rows.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" variant="head" align="center">
                  {row[0]}
                </TableCell>
                <TableCell>
                  {!Array.isArray(row[1]) ? row[1] : row[1].map((row, j) => <Typography key={j}>{row}</Typography>)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
