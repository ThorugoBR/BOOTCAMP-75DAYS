package one.digital.innovation.experts.Product_catalog.repository;


import one.digital.innovation.experts.Product_catalog.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.CrudRepositoryExtensionsKt;

public interface ProductRepository extends CrudRepository<Product,Integer> {


}
