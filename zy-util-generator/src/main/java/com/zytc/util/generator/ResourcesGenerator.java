package com.zytc.util.generator;

import com.baomidou.mybatisplus.enums.FieldFill;
import com.baomidou.mybatisplus.generator.AutoGenerator;
import com.baomidou.mybatisplus.generator.InjectionConfig;
import com.baomidou.mybatisplus.generator.config.*;
import com.baomidou.mybatisplus.generator.config.po.TableField;
import com.baomidou.mybatisplus.generator.config.po.TableFill;
import com.baomidou.mybatisplus.generator.config.po.TableInfo;
import com.baomidou.mybatisplus.generator.config.rules.DbType;
import com.baomidou.mybatisplus.generator.config.rules.NamingStrategy;
import com.baomidou.mybatisplus.toolkit.StringUtils;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;
import org.springframework.core.io.support.PropertiesLoaderUtils;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Properties;

/**
 * @author lengleng
 * @date 2017/10/29
 */
public class ResourcesGenerator {


    public static void main(String[] args) {
        Properties p = getProperties();
        String jdbc_driver = p.getProperty("jdbc_driver");
        String jdbc_username = p.getProperty("jdbc_username");
        String jdbc_password = p.getProperty("jdbc_password");
        String jdbc_url = p.getProperty("jdbc_url");
        String global_output = p.getProperty("global_output");
        String global_author = p.getProperty("global_author");
        String package_parent = p.getProperty("package_parent");
        String package_controller = p.getProperty("package_controller");

        String outputDir = global_output;
        final String viewOutputDir = global_output + "/view/";
        AutoGenerator mpg = new AutoGenerator();
        // 全局配置
        GlobalConfig gc = new GlobalConfig();
        gc.setOutputDir(outputDir);
        gc.setFileOverride(true);
        gc.setActiveRecord(true);
        // XML 二级缓存
        gc.setEnableCache(false);
        // XML ResultMap
        gc.setBaseResultMap(true);
        // XML columList
        gc.setBaseColumnList(true);
        gc.setAuthor(global_author);
        mpg.setGlobalConfig(gc);

        // 数据源配置
        DataSourceConfig dsc = new DataSourceConfig();
        dsc.setDbType(DbType.MYSQL);
        dsc.setDriverName(jdbc_driver);
        dsc.setUsername(jdbc_username);
        dsc.setPassword(jdbc_password);
        dsc.setUrl(jdbc_url);
        mpg.setDataSource(dsc);

        // 策略配置
        StrategyConfig strategy = new StrategyConfig();
        // strategy.setCapitalMode(true);// 全局大写命名 ORACLE 注意
        strategy.setNaming(NamingStrategy.underline_to_camel);// 表名生成策略
        strategy.setEntityLombokModel(true);
        strategy.setVersionFieldName("version_num");
        strategy.setLogicDeleteFieldName("is_delete");
        List<TableFill> tableFills=new ArrayList();
        TableFill tableFillInsert=new TableFill("gmt_create", FieldFill.INSERT);
        TableFill tableFillUpdate=new TableFill("gmt_update", FieldFill.INSERT_UPDATE);
		TableFill tableFillInsert2=new TableFill("version_num", FieldFill.INSERT);
        TableFill tableFillInsert3=new TableFill("is_delete", FieldFill.INSERT);
        tableFills.add(tableFillInsert);
        tableFills.add(tableFillUpdate);
		tableFills.add(tableFillInsert2);
		tableFills.add(tableFillInsert3);
        strategy.setTableFillList(tableFills);
         strategy.setInclude(new String[] { "nideshop_params","nideshop_article","nideshop_templete_message","nideshop_message"}); // 需要生成的表
        // strategy.setExclude(new String[]{"test"}); // 排除生成的表
        // 自定义实体父类
        // strategy.setSuperEntityClass("com.baomidou.demo.TestEntity");
        // 自定义实体，公共字段
        // strategy.setSuperEntityColumns(new String[] { "test_id", "age" });
        // 自定义 mapper 父类
        // strategy.setSuperMapperClass("com.baomidou.demo.TestMapper");
        // 自定义 service 父类
        // strategy.setSuperServiceClass("com.baomidou.demo.TestService");
        // 自定义 service 实现类父类
        // strategy.setSuperServiceImplClass("com.baomidou.demo.TestServiceImpl");
        // 自定义 controller 父类
        // strategy.setSuperControllerClass("com.baomidou.demo.TestController");
        // 【实体】是否生成字段常量（默认 false）
        // public static final String ID = "test_id";
        // strategy.setEntityColumnConstant(true);
        // 【实体】是否为构建者模型（默认 false）
        // public User setName(String name) {this.name = name; return this;}
        // strategy.setEntityBuilderModel(true);
        // 表名生成策略
        mpg.setStrategy(strategy);

        // 包配置
        PackageConfig pc = new PackageConfig();
        pc.setParent(package_parent);
        pc.setController(package_controller);
        mpg.setPackageInfo(pc);

        // 注入自定义配置，可以在 VM 中使用 cfg.abc 设置的值
        InjectionConfig cfg = new InjectionConfig() {
            @Override
            public void initMap() {
            }
        };
        // 生成的模版路径，不存在时需要先新建
        File viewDir = new File(viewOutputDir);
        if (!viewDir.exists()) {
            viewDir.mkdirs();
        }
        List<FileOutConfig> focList = new ArrayList<FileOutConfig>();
        focList.add(new FileOutConfig("/templates/listvue.vue.vm") {
            @Override
            public String outputFile(TableInfo tableInfo) {
                return getGeneratorViewPath(viewOutputDir, tableInfo, ".vue");
            }
        });
        cfg.setFileOutConfigList(focList);
        mpg.setCfg(cfg);


        //生成controller相关
        mpg.execute();
    }

    /**
     * 获取配置文件
     *
     * @return 配置Props
     */
    private static Properties getProperties() {
        // 读取配置文件
        Resource resource = new ClassPathResource("/config.properties");
        Properties props = new Properties();
        try {
            props = PropertiesLoaderUtils.loadProperties(resource);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return props;
    }

    /**
     * 页面生成的文件名
     */
    private static String getGeneratorViewPath(String viewOutputDir, TableInfo tableInfo, String suffixPath) {
        String name = StringUtils.firstToLowerCase(tableInfo.getEntityName());
        String path = viewOutputDir + "/" + name + "/index" + suffixPath;
        File viewDir = new File(path).getParentFile();
        if (!viewDir.exists()) {
            viewDir.mkdirs();
        }
        return path;
    }
}
