package one.digital.innovation.experts.Product_catalog.config;


import org.elasticsearch.client.RestHighLevelClient;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.convert.support.DefaultConversionService;
import org.springframework.data.elasticsearch.client.ClientConfiguration;
import org.springframework.data.elasticsearch.client.RestClients;
import org.springframework.data.elasticsearch.core.mapping.ElasticsearchPersistentEntity;
import org.springframework.data.elasticsearch.config.AbstractElasticsearchConfiguration;
import org.springframework.data.elasticsearch.repository.config.EnableElasticsearchRepositories;

@Configuration
@EnableElasticsearchRepositories(basePackages = "one.digital.innovation.experts.Product_catalog.repository")
public class ElasticSerchConfig extends AbstractElasticsearchConfiguration {

    @Override
    public RestHighLevelClient ElasticSearchClient(){
        ClientConfiguration clientConfiguration=ClientConfiguration.builder()
                .connectedTo("localhost:8080","localhost:8088")
                .build();
        return RestClients.create(clientConfiguration).rest();

    }

    @Bean
    @Override
    public  EntityMapper entityMapper(){
        ElasticsearchEntityMapper entityMapper=new ElasticsearchEntityMapper(elasticsearchMappingContext() new DefaultConversionService());
        entityMapper.setConversation(elasticsearchCustomConversions());
        return entityMapper;

    }


}


