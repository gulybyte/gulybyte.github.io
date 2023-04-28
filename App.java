import java.util.HashMap;
import java.util.Map;

import java.util.HashMap;

import java.util.HashMap;

import java.util.HashMap;

public class App {
    public static void main(String[] args) {

        final String KEY_1 = "FB";
        final String KEY_2 = "Ea";

        var map = new HashMap<String, String>();


        map.put(KEY_1, "gulybyte");
        map.put(KEY_2, "John Doe");

        System.out.println(map);

        System.out.println(KEY_1+" tem valor: `"+map.get(KEY_1)+"` com o hash: "+KEY_1.hashCode());
        System.out.println(KEY_2+" tem valor: `"+map.get(KEY_2)+"` com o hash: "+KEY_2.hashCode());

    }
}
