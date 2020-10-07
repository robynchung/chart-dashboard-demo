import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import DeleteIcon from "@material-ui/icons/Delete";
import ForumIcon from "@material-ui/icons/Forum";
import InfoIcon from "@material-ui/icons/Info";
import Label from "@material-ui/icons/Label";
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import MailIcon from "@material-ui/icons/Mail";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import TreeItem from "@material-ui/lab/TreeItem";
import TreeView from "@material-ui/lab/TreeView";
import Typography from "@material-ui/core/Typography";

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    "&:hover > $content": {
      backgroundColor: theme.palette.action.hover
    },
    "&:focus > $content, &$selected > $content": {
      backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      color: "var(--tree-view-color)"
    },
    "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      backgroundColor: "transparent"
    }
  },
  content: {
    color: "#5e99ff",
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    "$expanded > &": {
      fontWeight: theme.typography.fontWeightRegular
    }
  },
  group: {
    marginLeft: 0,
    "& $content": {
      paddingLeft: theme.spacing(2)
    }
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: "inherit",
    color: "inherit"
  },
  labelRoot: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0.5, 0)
  },
  labelIcon: {
    color: "#bdddee",
    fontSize: 12,
    marginRight: theme.spacing(1)
  },
  labelText: {
    fontWeight: "inherit",
    fontFamily: "Avenir",
    flexGrow: 1
  }
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const { labelText, labelIcon: LabelIcon, labelInfo, color, bgColor, ...other } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": "#5e99ff",
        "--tree-view-bg-color": "#0e388159"
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label
      }}
      {...other}
    />
  );
}

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400
  }
});

export default function GmailTreeView() {
  const classes = useStyles();

  return (
    <div className="component-menu-container">
      <div className="logo">Blue City</div>
      <TreeView
        className={classes.root}
        defaultExpanded={["3"]}
        defaultCollapseIcon={<ArrowDropDownIcon />}
        defaultExpandIcon={<ArrowRightIcon />}
        defaultEndIcon={<div style={{ width: 24 }} />}
      >
        <StyledTreeItem nodeId="1" labelText="All Mail" labelIcon={MailIcon} />
        <StyledTreeItem nodeId="2" labelText="Trash" labelIcon={DeleteIcon} />
        <StyledTreeItem nodeId="3" labelText="Categories" labelIcon={Label}>
          <StyledTreeItem nodeId="5" labelText="Social" labelIcon={SupervisorAccountIcon} color="#1a73e8" bgColor="#e8f0fe" />
          <StyledTreeItem nodeId="6" labelText="Updates" labelIcon={InfoIcon} color="#e3742f" bgColor="#fcefe3" />
          <StyledTreeItem nodeId="7" labelText="Forums" labelIcon={ForumIcon} color="#a250f5" bgColor="#f3e8fd" />
          <StyledTreeItem nodeId="8" labelText="Promotions" labelIcon={LocalOfferIcon} color="#3c8039" bgColor="#e6f4ea" />
        </StyledTreeItem>
        <StyledTreeItem nodeId="4" labelText="History" labelIcon={Label} />
      </TreeView>
    </div>
  );
}
