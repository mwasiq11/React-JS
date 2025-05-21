import { ID, Databases, Client, Storage, Query } from "appwrite";
import config from "../config/Config";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client.setEndpoint(config.appwriteURL).setProject(config.projectId);
    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.databaseID,
        config.appwriteURL,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      throw error;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.databaseID,
        config.collectionID,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwriet service::Update Post", error);
    }
  }
  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        config.databaseID,
        config.collectionID,
        slug
    );
    return true
    } catch (error) {
      console.log("App write service:: Delete Post", error);
      return false;
    }
  }
  async getPost(slug){
    try {
        return await this.databases.getDocument(
            config.databaseID,
            config.collectionID,
            slug,
        )
    } catch (error) {
        console.log("app write service :: get Post",error)
        return false
    }
  }
  
}
const service = new Service();
export default service;
