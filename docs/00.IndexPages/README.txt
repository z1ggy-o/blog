这个地方用来放不想要显示在侧边栏目录页，`sidebar` 属性设置为 false。一般是在 nvi bar 上使用。
对于想出现在侧边栏的，一般放在对应的文件夹内更加合适，因为侧边栏的内容是根据文件所在位置的内容生成的，这里文件生成的 sidebar 内容是相对 00.IndexPages 文件的。

是否为目录页，是由 frontmatter 中的 pageComponent.name 决定的；pageComponent.data 则决定创建目录的对象是谁。
生成的目录为同一个文件夹下的文档内容，可以自动识别下级目录并递归。
