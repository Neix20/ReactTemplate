import { useState } from "react";
import { Avatar, Box, Button, Checkbox, Divider, TextField, Typography, Card } from "@mui/material";

import { useParams } from "react-router-dom";

import style from "./style";

import { BpLoading } from "@components";
import { useToggle } from "@hooks";

import { useDispatch, useSelector } from 'react-redux';
import { Actions, Selectors } from '@libs/redux';

import { fetchUserComment, fetchUserGetComment } from "@api";

const CommunityDiscussions = (props) => {

  const { PK: userId } = useSelector(Selectors.userSelect);
  const { IncidentId = "" } = useParams();

  const [commentText, setCommentText] = useState("");

  const { flag: loading, open: setLoadingTrue, close: setLoadingFalse } = useToggle(false);

  // todo: Add Comment Form

  const comments = [
    {
      name: "Sarah L.",
      date: "2025-03-10",
      text: "I almost fell for his scheme too! He used the same investment pitch with me. Thankfully I saw this website first. Stay strong everyone.",
      likes: 12,
    },
    {
      name: "David K.",
      date: "2025-03-09",
      text: "The authorities have been notified about this scammer. If you've been affected, please file a police report and reference case #25783.",
      likes: 27,
    },
    {
      name: "Michelle T.",
      date: "2025-03-07",
      text: "I lost money to this person last month. I've joined the victim support group that meets virtually every Tuesday. It's helped me cope with the shame and anger. DM me if you want details.",
      likes: 19,
    },
  ];

  return (
    <>
      <BpLoading loading={loading} />
      <Card sx={style.card}>
        <Typography sx={style.cardTitle}>
          Community Discussions
        </Typography>
        {
          comments.map((comment, index) => (
            <Box key={index}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Avatar sx={{ bgcolor: "gray" }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Typography sx={(theme) => ({ color: "#000", ...theme.applyStyles('dark', { color: "#FFF" }) })}>{comment.name}</Typography>
                    <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>{comment.date}</Typography>
                  </Box>
                  <Typography sx={(theme) => ({ mb: 1, color: "#000", ...theme.applyStyles('dark', { color: "#FFF" }) })}>{comment.text}</Typography>
                </Box>
              </Box>
              {index < comments.length - 1 && <Divider sx={{ borderColor: "gray", my: 1 }} />}
            </Box>
          ))
        }
      </Card >

      {/* Share Your Thoughts */}
      <Card sx={style.card}>
        <Typography sx={style.cardTitle}>
          Share Your Thoughts
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Share your experience, advice, or support for other victims..."
          sx={{ borderRadius: 2 }}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
          <Button variant="contained">
            Post Comment
          </Button>
        </Box>
      </Card >
    </>
  );
};

export default CommunityDiscussions;
