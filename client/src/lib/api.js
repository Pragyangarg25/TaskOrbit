import API from "./axios-client";

export const loginMutationFn = async (data) => {
  const response = await API.post("/auth/login", data);
  return response.data;
};

export const registerMutationFn = async (data) =>
  await API.post("/auth/register", data);

export const logoutMutationFn = async () => await API.post("/auth/logout");

export const getCurrentUserQueryFn = async () => {
  const response = await API.get(`/user/current`);
  return response.data;
};

//********* WORKSPACE ****************
//************* */

export const createWorkspaceMutationFn = async (data) => {
  const response = await API.post(`/workspace/create/new`, data);
  return response.data;
};

export const editWorkspaceMutationFn = async ({
  workspaceId,
  data,
}) => {
  const response = await API.put(`/workspace/update/${workspaceId}`, data);
  return response.data;
};

export const getAllWorkspacesUserIsMemberQueryFn = async () => {
  const response = await API.get(`/workspace/all`);
  return response.data;
};

export const getWorkspaceByIdQueryFn = async (workspaceId) => {
  const response = await API.get(`/workspace/${workspaceId}`);
  return response.data;
};

export const getMembersInWorkspaceQueryFn = async (workspaceId) => {
  const response = await API.get(`/workspace/members/${workspaceId}`);
  return response.data;
};

export const getWorkspaceAnalyticsQueryFn = async (workspaceId) => {
  const response = await API.get(`/workspace/analytics/${workspaceId}`);
  return response.data;
};

export const changeWorkspaceMemberRoleMutationFn = async ({
  workspaceId,
  data,
}) => {
  const response = await API.put(
    `/workspace/change/member/role/${workspaceId}`,
    data
  );
  return response.data;
};

export const deleteWorkspaceMutationFn = async (workspaceId) => {
  const response = await API.delete(`/workspace/delete/${workspaceId}`);
  return response.data;
};

//*******MEMBER ****************

export const invitedUserJoinWorkspaceMutationFn = async (iniviteCode) => {
  const response = await API.post(`/member/workspace/${iniviteCode}/join`);
  return response.data;
};

//********* */
//********* PROJECTS
export const createProjectMutationFn = async ({
  workspaceId,
  data,
}) => {
  const response = await API.post(
    `/project/workspace/${workspaceId}/create`,
    data
  );
  return response.data;
};

export const editProjectMutationFn = async ({
  projectId,
  workspaceId,
  data,
}) => {
  const response = await API.put(
    `/project/${projectId}/workspace/${workspaceId}/update`,
    data
  );
  return response.data;
};

export const getProjectsInWorkspaceQueryFn = async ({
  workspaceId,
  pageSize = 10,
  pageNumber = 1,
}) => {
  const response = await API.get(
    `/project/workspace/${workspaceId}/all?pageSize=${pageSize}&pageNumber=${pageNumber}`
  );
  return response.data;
};

export const getProjectByIdQueryFn = async ({
  workspaceId,
  projectId,
}) => {
  const response = await API.get(
    `/project/${projectId}/workspace/${workspaceId}`
  );
  return response.data;
};

export const getProjectAnalyticsQueryFn = async ({
  workspaceId,
  projectId,
}) => {
  const response = await API.get(
    `/project/${projectId}/workspace/${workspaceId}/analytics`
  );
  return response.data;
};

export const deleteProjectMutationFn = async ({
  workspaceId,
  projectId,
}) => {
  const response = await API.delete(
    `/project/${projectId}/workspace/${workspaceId}/delete`
  );
  return response.data;
};

//*******TASKS ********************************
//************************* */

export const createTaskMutationFn = async ({
  workspaceId,
  projectId,
  data,
}) => {
  const response = await API.post(
    `/task/workspace/${workspaceId}/project/${projectId}/create`,
    data
  );
  return response.data;
};

export const editTaskMutationFn = async ({
  workspaceId,
  projectId,
  taskId,
  data,
}) => {
  const response = await API.put(
    `/task/${taskId}/workspace/${workspaceId}/project/${projectId}/update`,
    data
  );
  return response.data;
};

export const getAllTasksQueryFn = async ({
  workspaceId,
  keyword,
  projectId,
  assignedTo,
  priority,
  status,
  dueDate,
  pageNumber,
  pageSize,
}) => {
  const response = await API.get(
    `/task/workspace/${workspaceId}/all?keyword=${keyword}&projectId=${projectId}&assignedTo=${assignedTo}&priority=${priority}&status=${status}&dueDate=${dueDate}&pageNumber=${pageNumber}&pageSize=${pageSize}`
  );
  return response.data;
};

export const deleteTaskMutationFn = async ({
  workspaceId,
  taskId,
}) => {
  const response = await API.delete(
    `/task/${taskId}/workspace/${workspaceId}/delete`
  );
  return response.data;
};
