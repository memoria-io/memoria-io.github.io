import 'package:http/http.dart' as http;
import 'package:yaml/yaml.dart';

class CommonUtils {
  static Future<dynamic> loadYamlResource(Uri path) async {
    final response = await http.get(path);
    if (response.statusCode == 200) {
      return loadYaml(response.body, sourceUrl: path);
    } else {
      throw Exception('Failed to load content from $path, status: ${response.statusCode}');
    }
  }
}
