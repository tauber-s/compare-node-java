import java.net.http.*;
import java.net.URI;
import java.util.*;
import java.util.concurrent.*;

public class Demo {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        long start = System.currentTimeMillis();
        List<CompletableFuture<Void>> tasks = new ArrayList<>();

        for (int i = 1; i <= 100; i++) {
            int id = i;
            var req = HttpRequest.newBuilder(URI.create("https://dummyjson.com/users/"+id)).build();
            tasks.add(client.sendAsync(req, HttpResponse.BodyHandlers.ofString())
                    .thenAccept(res -> {}));
        }

        CompletableFuture.allOf(tasks.toArray(new CompletableFuture[0])).join();

        long end = System.currentTimeMillis();
        System.out.println("[Java] total time: " + (end - start) + "ms");
    }
}
