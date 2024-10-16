import { Button, TextField, Typography } from "@mui/material";
import GenericDialog from "../components/dialogue/modal";

export const SettingsAddOrUpdateModal = (props: any) => {
  return (
    <GenericDialog
      open={props.showModal}
      onClose={props.handleModal}
      title={`${props.isForUpdate ? "Edit" : "Add"} ${props.modalName}`}
      actions={[
        <Button
          key="cancel"
          onClick={() => {
            props.handleModal();
            props.setIsForUpdate(false);
          }}
        >
          <Typography textTransform={"capitalize"} variant={"body1"}>
            Cancel
          </Typography>
        </Button>,
        <Button
          key="add"
          onClick={async () => {
            await props.handleSave();
            props.handleModal();
            props.setIsForUpdate(false);
          }}
          disabled={props.shouldDisabled}
        >
          <Typography textTransform={"capitalize"}>
            {!props.isForUpdate ? "Add" : "edit"}
          </Typography>
        </Button>,
      ]}
      children={props.renderFields()}
    ></GenericDialog>
  );
};

export {};