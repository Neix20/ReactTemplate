import { useState } from "react";
import { Avatar, Box, Button, Checkbox, Divider, TextField, Typography } from "@mui/material";
import { ThumbUp } from "@mui/icons-material";

const CommunityDiscussions = () => {
  const [commentText, setCommentText] = useState("");

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


      {/* Community Discussions */}
      <Box sx={{ bgcolor: "#1E293B", borderRadius: 2, p: 3 }}>
        <Typography sx={{ color: "#38BDF8", fontSize: "1.125rem", fontWeight: "medium", mb: 2 }}>
          Community Discussions
        </Typography>
        {
          comments.map((comment, index) => (
            <Box key={index} sx={{ pb: 2 }}>
              <Box sx={{ display: "flex", alignItems: "flex-start", gap: 2 }}>
                <Avatar sx={{ bgcolor: "gray" }} />
                <Box sx={{ flexGrow: 1 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                    <Typography sx={{ color: "white" }}>{comment.name}</Typography>
                    <Typography sx={{ color: "gray", fontSize: "0.875rem" }}>{comment.date}</Typography>
                  </Box>
                  <Typography sx={{ color: "white", mb: 1 }}>{comment.text}</Typography>
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <Button size="small" sx={{ color: "gray", textTransform: "none" }} startIcon={<ThumbUp />}>
                      {comment.likes}
                    </Button>
                    <Button size="small" sx={{ color: "gray", textTransform: "none" }}>
                      Reply
                    </Button>
                  </Box>
                </Box>
              </Box>
              {index < comments.length - 1 && <Divider sx={{ borderColor: "gray", my: 2 }} />}
            </Box>
          ))
        }
      </Box >

      {/* Share Your Thoughts */}
      < Box sx={{ bgcolor: "#1E293B", borderRadius: 2, p: 3 }}>
        <Typography sx={{ color: "#38BDF8", fontSize: "1.125rem", fontWeight: "medium", mb: 2 }}>
          Share Your Thoughts
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={4}
          placeholder="Share your experience, advice, or support for other victims..."
          sx={{ bgcolor: "#243757", borderRadius: 2, input: { color: "white" } }}
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
        />
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", color: "gray" }}>
            <Checkbox sx={{ color: "gray" }} />
            <Typography variant="body2">You can post anonymously</Typography>
          </Box>
          <Button variant="contained" sx={{ bgcolor: "#38BDF8", textTransform: "none" }}>
            Post Comment
          </Button>
        </Box>
      </Box >
    </>
  );
};

export default CommunityDiscussions;
