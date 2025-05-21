import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;
import 'package:markdown_widget/markdown_widget.dart';
import 'package:yaml/yaml.dart';
import 'package:memoriaio/utils/common_utils.dart';

class MarkdownPage extends StatefulWidget {
  final String rootDirName;

  const MarkdownPage(this.rootDirName, {super.key});

  @override
  State<MarkdownPage> createState() => _MarkdownPageState();
}

class _MarkdownPageState extends State<MarkdownPage> {
  List<Product> products = [];
  String content = '';
  String? selectedFile;
  final TocController tocController = TocController();

  @override
  void initState() {
    super.initState();
    loadConfig();
  }

  Future<void> loadConfig() async {
    final yaml = await CommonUtils.loadYamlResource(Uri.parse('/${widget.rootDirName}/config.yaml'));
    final list = (yaml['markdown_files'] as YamlList).map((e) => Product.fromYaml(e)).toList();
    setState(() {
      products = list;
    });
    if (list.isNotEmpty) {
      loadArticle(list.first.file);
    }
  }

  Future<void> loadArticle(String file) async {
    var path = Uri.parse('/${widget.rootDirName}/$file');
    final response = await http.get(path);
    setState(() {
      selectedFile = path.pathSegments.last;
      content = response.body;
      tocController.jumpToIndex(0);
    });
  }

  @override
  Widget build(BuildContext context) {
    return LayoutBuilder(
      builder: (context, constraints) {
        final maxWidth = constraints.maxWidth;

        return Row(
          children: [
            Container(
              width: maxWidth * 0.07, // 20% for article list
              color: Colors.white,
              child: ListView(
                children: products.map((p) {
                  final selected = p.file == selectedFile;
                  return ListTile(
                    title: Text(p.title),
                    selected: selected,
                    onTap: () => loadArticle(p.file),
                  );
                }).toList(),
              ),
            ),
            Container(
              width: maxWidth * 0.2, // 20% for TOC
              color: Colors.white,
              child: TocWidget(controller: tocController),
            ),
            Container(
              width: maxWidth * 0.7, // 60% for markdown content
              color: Colors.white,
              child: MarkdownWidget(
                data: content,
                tocController: tocController,
                shrinkWrap: true,
                padding: const EdgeInsets.all(16),
              ),
            ),
          ],
        );
      },
    );
  }
}

class Product {
  final String title;
  final String file;
  final String date;

  Product({required this.title, required this.file, required this.date});

  factory Product.fromYaml(YamlMap yaml) => Product(
        title: yaml['title'],
        file: yaml['file'],
        date: yaml['date'],
      );
}
