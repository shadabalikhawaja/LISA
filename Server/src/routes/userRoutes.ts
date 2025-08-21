import express from "express";
import { Router } from "express";
import {
  getUnreadEmails,
  getCurrentDateTime,
  getEmailsUsingSearchQuery,
  getCalenderEvents,
  notionDataApi,
  getProductHuntPosts,
  getMorningUpdate,
  perplexityApi,
  getUnreadMessages,
  sendMessage,
  getAuthorizedUrl,
  refreshAccessTokenController,
  addCalenderEvent,
  draftEmail,
  drafteEmailReply,
  getStaticData,
  addPreferences,
  updatePreferences,
  getPreferences,
  updateMorningUpdateCheck,
  updateUserPreferences,
  addMorningPreferences,
  getPublicEvents,
  addEvent,
  addUserDetails,
  addPhoneNumber,
  updateCalenderEvent,
  deleteCalenderEvent,
  getLatestEmails,
  deleteGoogleGmail,
  performNotionTasks,
  notionDatabaseList,
  notionDatabaseProperties,
  notionDatabaseSummary,
  lisaCallEndpoint,
} from "../controllers/user";

import { protect } from "../middleware/middleware";
import { refreshAccessToken } from "../middleware/refreshAccessToken";
import { protectAgent } from "../middleware/agentMiddleware";

export const userRouter: Router = express.Router();

userRouter
  .route("/getUnreadEmails")
  .post(protectAgent, refreshAccessToken, getUnreadEmails);
userRouter
  .route("/getLatestEmails")
  .post(protectAgent, refreshAccessToken, getLatestEmails);
userRouter
  .route("/getCalenderEvents")
  .post(protectAgent, refreshAccessToken, getCalenderEvents);
userRouter
  .route("/getEmailsUsingSearchQuery/:searchField")
  .post(protectAgent, refreshAccessToken, getEmailsUsingSearchQuery);
userRouter
  .route("/addGoogleCalenderEvent")
  .post(protectAgent, refreshAccessToken, addCalenderEvent);
userRouter
  .route("/updateGoogleCalenderEvent")
  .post(protectAgent, refreshAccessToken, updateCalenderEvent);
userRouter
  .route("/deleteGoogleCalenderEvent")
  .post(protectAgent, refreshAccessToken, deleteCalenderEvent);
userRouter
  .route("/draftGoogleGmail")
  .post(protectAgent, refreshAccessToken, draftEmail);
userRouter
  .route("/draftReplyGoogleGmail")
  .post(protectAgent, refreshAccessToken, drafteEmailReply);
userRouter
  .route("/deleteSpecificGmail")
  .post(protectAgent, refreshAccessToken, deleteGoogleGmail);
userRouter.route("/getCurrentDateTime").post(protectAgent, getCurrentDateTime);
userRouter.route("/notionData").post(protectAgent, notionDataApi);
userRouter.route("/performNotionTasks").post(protectAgent, performNotionTasks);
userRouter.route("/notionDatabaseList").post(protectAgent, notionDatabaseList);
userRouter
  .route("/notionDatabaseProperties")
  .post(protectAgent, notionDatabaseProperties);
userRouter
  .route("/notionDatabaseSummary")
  .post(protectAgent, notionDatabaseSummary);
userRouter
  .route("/getProductHuntPosts/:topic")
  .post(protectAgent, getProductHuntPosts);
userRouter
  .route("/getMorningFeedback")
  .post(protectAgent, refreshAccessToken, getMorningUpdate);
userRouter.route("/perplexityNews").post(protectAgent, perplexityApi);
userRouter.route("/getUnreadMessages").post(protectAgent, getUnreadMessages);
userRouter.route("/sendMessage").post(protectAgent, sendMessage);
userRouter.route("/addUserPreferences").post(protectAgent, addPreferences);
userRouter.route("/updatePreferences").post(protectAgent, updatePreferences);
userRouter.route("/getPreferences").post(protectAgent, getPreferences);
userRouter
  .route("/updateMorningCheck")
  .post(protectAgent, updateMorningUpdateCheck);
userRouter
  .route("/refreshAccessTokens")
  .get(protect, refreshAccessToken, refreshAccessTokenController);
userRouter
  .route("/getAuthorizedUrl")
  .get(protect, refreshAccessToken, getAuthorizedUrl);
userRouter.route("/updateUserPreferences").post(protect, updateUserPreferences);
userRouter.route("/addMorningPreferences").post(protect, addMorningPreferences);
userRouter.route("/addUserDetails").post(protect, addUserDetails);
userRouter.route("/addPhoneNumber").post(protect, addPhoneNumber);
userRouter.route("/getStaticData").get(getStaticData);
userRouter
  .route("/getProductHuntPostsPublicApi/:topic")
  .get(getProductHuntPosts);
userRouter.route("/perplexityNewsPublicApi").post(perplexityApi);
userRouter.route("/getEventsPublicApi").get(getPublicEvents);
userRouter.route("/addEvent").post(addEvent);
userRouter.route("/lisaCallEndpoint").post(lisaCallEndpoint);
