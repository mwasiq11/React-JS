const config={
    appwriteURL:String(import.meta.env.VITE_APP_WRITE_URL),
    projectId:String(import.meta.env.VITE_APP_WRITE_PROJECT_ID),
    databaseID:String(import.meta.env.VITE_APP_WRITE_DATABASE_ID),
    collectionID:String(import.meta.env.VITE_APP_WRITE_COLLECTION_ID),
    bucketID:String(import.meta.env.VITE_APP_WRITE_BUCKET_ID),
}
export default config