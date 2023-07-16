export const userColumns = [
  { field: "id", headerName: "VAT Number", width: 270 },
  {
    field: "user",
    headerName: "User",
    width: 130,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "company",
    headerName: "Company Name",
    width: 150,
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
];
