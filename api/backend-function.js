export default async function handler(req, res) {
    try {
        // Your backend logic here
        const data = { message: "Hello from the backend!" };
        return res.status(200).json(data);
    } catch (error) {
        console.error("Backend error:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}