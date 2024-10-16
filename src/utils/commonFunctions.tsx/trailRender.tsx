import { Box, FormControlLabel, Grid, Typography } from "@mui/material";
import Checkbox from "../../components/checkbox/checkbox";
import { useState } from "react";
import Button from "../../components/button/button";
import { Role, Member } from "../interface";
import { members, roles } from "../dummyData";

const RenderFields: React.FC = () => {
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);
  const [checkedMembers, setCheckedMembers] = useState<{ [email: string]: boolean }>({});

  const toggleRole = (role: Role) => {
    if (selectedRoles.includes(role)) {
      setSelectedRoles(selectedRoles.filter((r) => r !== role));
    } else {
      setSelectedRoles([...selectedRoles, role]);
    }
  };

  const handleMemberCheckboxChange = (email: string) => {
    setCheckedMembers((prevState) => ({
      ...prevState,
      [email]: !prevState[email],
    }));
  };

  return (
    <Box>
      <Typography variant="subtitle1" margin="normal">
        Select Roles and assign to members
      </Typography>
      <Box display="flex" marginBottom={2}>
        {roles.map((role) => (
          <Button
            key={role}
            variant={selectedRoles.includes(role) ? "primary" : "secondary"}
            onClick={() => toggleRole(role)}
            disabled={false}
            label={role}
          >
            {role}
          </Button>
        ))}
      </Box>
      <Grid container spacing={2}>
        {selectedRoles.map((role) => (
          <Grid item xs={12} md={6} key={role}>
            <Box
              sx={{
                border: 1,
                borderColor: "grey.300",
                borderRadius: 1,
                padding: 2,
                maxHeight: 400,
                overflowY: "auto" 
              }}
            >
              <Typography variant="subtitle2" marginBottom={1}>
                {role}
              </Typography>
              {members[role].map((member) => (
                <FormControlLabel
                  key={member.email}
                  control={
                    <Checkbox
                      checked={!!checkedMembers[member.email]}
                      onChange={() => handleMemberCheckboxChange(member.email)}
                      label={`${member.name} (${member.email})`}
                    />
                  }
                  label={`${member.name} (${member.email})`}
                />
              ))}
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default RenderFields;
